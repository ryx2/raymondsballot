"use client";

import { useMemo } from "react";
import { geoMercator } from "d3-geo";
import type {
  ExtendedFeature,
  ExtendedFeatureCollection,
  GeoGeometryObjects,
  GeoProjection,
} from "d3-geo";
import type { GeoJsonProperties } from "geojson";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import type { ComposableMapProps } from "react-simple-maps";
import { feature } from "topojson-client";
import countiesAtlas from "us-atlas/counties-10m.json";
import { County } from "@/data/counties";

const MAP_WIDTH = 975;
const MAP_HEIGHT = 610;
const MAP_PADDING = 44;
type CountyFeature = ExtendedFeature<GeoGeometryObjects, GeoJsonProperties>;
type CountyFeatureCollection = ExtendedFeatureCollection<CountyFeature>;

const ALL_COUNTY_FEATURES = feature(
  countiesAtlas as never,
  countiesAtlas.objects.counties as never
) as unknown as CountyFeatureCollection;

interface Props {
  stateSlug: string;
  counties: County[];
  selectedCountySlug?: string;
}

export default function CountyPicker({
  stateSlug,
  counties,
  selectedCountySlug,
}: Props) {
  const countiesByFips = new Map(counties.map((county) => [county.fips, county]));
  const countyFips = useMemo(
    () => new Set(counties.map((county) => county.fips)),
    [counties]
  );
  const selectedCounty = counties.find(
    (county) => county.slug === selectedCountySlug
  );
  const stateCountyFeatures = useMemo<CountyFeatureCollection>(
    () => ({
      type: "FeatureCollection" as const,
      features: ALL_COUNTY_FEATURES.features.filter((countyFeature) =>
        countyFips.has(String(countyFeature.id).padStart(5, "0"))
      ),
    }),
    [countyFips]
  );
  const selectedCountyFeature = useMemo(
    () =>
      selectedCounty
        ? stateCountyFeatures.features.find(
            (countyFeature) =>
              String(countyFeature.id).padStart(5, "0") === selectedCounty.fips
          )
        : undefined,
    [selectedCounty, stateCountyFeatures]
  );
  const projection = useMemo<GeoProjection>(() => {
    const paddingX = selectedCountyFeature ? 92 : MAP_PADDING;
    const paddingY = selectedCountyFeature ? 72 : MAP_PADDING;
    const extent: [[number, number], [number, number]] = [
      [paddingX, paddingY],
      [MAP_WIDTH - paddingX, MAP_HEIGHT - paddingY],
    ];
    const mapProjection = geoMercator();

    return selectedCountyFeature
      ? mapProjection.fitExtent(extent, selectedCountyFeature)
      : mapProjection.fitExtent(extent, stateCountyFeatures);
  }, [selectedCountyFeature, stateCountyFeatures]);

  return (
    <div className="border-t-2 border-ink pt-5">
      <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="eyebrow mb-2">Choose your county</div>
          <h2 className="font-display text-3xl font-black tracking-tight">
            Click on the county where you vote.
          </h2>
        </div>
        <div className="font-data text-xs text-ink-faint">
          {counties.length} counties / county equivalents
        </div>
      </div>

      <div className="border-2 border-ink bg-paper-deep p-3 md:p-5">
        <ComposableMap
          projection={projection as unknown as ComposableMapProps["projection"]}
          width={MAP_WIDTH}
          height={MAP_HEIGHT}
          className="h-auto w-full"
          aria-label="County map"
        >
          <Geographies geography={stateCountyFeatures}>
            {({ geographies }) =>
              geographies.map((geography) => {
                const fips = String(geography.id).padStart(5, "0");
                const county = countiesByFips.get(fips);
                if (!county) return null;

                return (
                  <CountyGeography
                    key={geography.rsmKey}
                    county={county}
                    geography={geography}
                    selected={county.slug === selectedCountySlug}
                    stateSlug={stateSlug}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-muted">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 border border-green bg-green" />
          <span>County</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 border-2 border-ink bg-accent" />
          <span>Selected</span>
        </div>
        {selectedCounty && (
          <div className="font-data text-ink">
            Selected: {selectedCounty.name} / FIPS {selectedCounty.fips}
          </div>
        )}
      </div>

      <details className="mt-5 border border-rule-soft bg-paper p-4">
        <summary className="cursor-pointer font-display text-sm font-bold tracking-tight">
          County list fallback
        </summary>
        <div className="mt-4 grid max-h-72 grid-cols-2 gap-2 overflow-auto pr-2 sm:grid-cols-3 lg:grid-cols-5">
          {counties.map((county) => (
            <a
              key={county.fips}
              href={`/states/${stateSlug}/${county.slug}`}
              className={[
                "flex min-h-12 flex-col justify-between border px-3 py-2 text-sm transition-colors",
                county.slug === selectedCountySlug
                  ? "border-ink bg-ink text-paper"
                  : "border-rule-soft hover:border-ink hover:bg-paper-deep",
              ].join(" ")}
            >
              <span className="truncate">{county.name}</span>
              <span className="font-data text-[10px] opacity-70">
                FIPS {county.fips}
              </span>
            </a>
          ))}
        </div>
      </details>
    </div>
  );
}

function CountyGeography({
  county,
  geography,
  selected,
  stateSlug,
}: {
  county: County;
  geography: Parameters<typeof Geography>[0]["geography"];
  selected: boolean;
  stateSlug: string;
}) {
  return (
    <a
      href={`/states/${stateSlug}/${county.slug}`}
      aria-label={`${county.name} county guide`}
    >
      <title>
        {county.name} / FIPS {county.fips}
      </title>
      <Geography
        geography={geography}
        fill={selected ? "var(--accent)" : "var(--green)"}
        stroke="var(--paper)"
        strokeWidth={selected ? 1.1 : 0.35}
        style={{
          default: {
            outline: "none",
            transition: "fill 160ms ease, stroke-width 160ms ease",
          },
          hover: {
            fill: "var(--accent)",
            outline: "none",
            stroke: "var(--ink)",
            strokeWidth: 0.75,
            cursor: "pointer",
          },
          pressed: {
            fill: "var(--ink)",
            outline: "none",
          },
        }}
      />
    </a>
  );
}
