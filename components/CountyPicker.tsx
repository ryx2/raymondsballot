"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import countiesAtlas from "us-atlas/counties-10m.json";
import { County } from "@/data/counties";

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
  const stateFips = counties[0]?.stateFips;
  const selectedCounty = counties.find(
    (county) => county.slug === selectedCountySlug
  );

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
          projection="geoAlbersUsa"
          width={975}
          height={610}
          className="h-auto w-full"
          aria-label="County map"
        >
          <ZoomableGroup
            zoom={stateMapZoom(stateSlug)}
            center={stateMapCenter(stateSlug)}
            translateExtent={[
              [0, 0],
              [975, 610],
            ]}
          >
            <Geographies geography={countiesAtlas}>
              {({ geographies }) =>
                geographies.map((geography) => {
                  const fips = String(geography.id).padStart(5, "0");
                  const county = countiesByFips.get(fips);

                  if (!county) {
                    const sameState =
                      stateFips && fips.slice(0, 2) === stateFips;
                    return (
                      <Geography
                        key={geography.rsmKey}
                        geography={geography}
                        fill={sameState ? "#d8d2c1" : "transparent"}
                        stroke="transparent"
                        strokeWidth={0}
                        style={{
                          default: { outline: "none", pointerEvents: "none" },
                          hover: { outline: "none", pointerEvents: "none" },
                          pressed: { outline: "none", pointerEvents: "none" },
                        }}
                      />
                    );
                  }

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
          </ZoomableGroup>
        </ComposableMap>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-muted">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 border border-green bg-green" />
          <span>County</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 border-2 border-ink bg-ink" />
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
        fill={selected ? "var(--ink)" : "var(--green)"}
        stroke="var(--paper)"
        strokeWidth={selected ? 0.65 : 0.35}
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

function stateMapCenter(stateSlug: string): [number, number] {
  const centers: Record<string, [number, number]> = {
    alabama: [-86.8, 32.8],
    alaska: [-152, 64],
    arizona: [-111.7, 34.2],
    arkansas: [-92.4, 34.9],
    california: [-119.5, 37.2],
    colorado: [-105.6, 39],
    connecticut: [-72.7, 41.6],
    delaware: [-75.5, 39],
    florida: [-82.4, 28.2],
    georgia: [-83.4, 32.7],
    hawaii: [-157.5, 20.8],
    idaho: [-114.6, 44.2],
    illinois: [-89.2, 40],
    indiana: [-86.1, 39.9],
    iowa: [-93.5, 42],
    kansas: [-98.3, 38.5],
    kentucky: [-85.3, 37.6],
    louisiana: [-91.9, 30.9],
    maine: [-69.1, 45.2],
    maryland: [-76.7, 39],
    massachusetts: [-71.8, 42.2],
    michigan: [-85.4, 44.3],
    minnesota: [-94.3, 46.3],
    mississippi: [-89.7, 32.7],
    missouri: [-92.6, 38.5],
    montana: [-109.6, 47],
    nebraska: [-99.8, 41.5],
    nevada: [-116.8, 39.3],
    "new-hampshire": [-71.6, 43.7],
    "new-jersey": [-74.6, 40.1],
    "new-mexico": [-106.1, 34.4],
    "new-york": [-75.6, 42.9],
    "north-carolina": [-79.4, 35.5],
    "north-dakota": [-100.5, 47.5],
    ohio: [-82.8, 40.3],
    oklahoma: [-97.5, 35.5],
    oregon: [-120.5, 44],
    pennsylvania: [-77.7, 40.9],
    "rhode-island": [-71.6, 41.7],
    "south-carolina": [-80.9, 33.8],
    "south-dakota": [-100.2, 44.4],
    tennessee: [-86.4, 35.8],
    texas: [-99.4, 31.1],
    utah: [-111.7, 39.3],
    vermont: [-72.7, 44],
    virginia: [-78.8, 37.7],
    washington: [-120.4, 47.4],
    "west-virginia": [-80.6, 38.6],
    wisconsin: [-89.7, 44.6],
    wyoming: [-107.6, 43],
  };

  return centers[stateSlug] ?? [-96, 38];
}

function stateMapZoom(stateSlug: string): number {
  const zooms: Record<string, number> = {
    alabama: 5.1,
    alaska: 2.2,
    arizona: 4.8,
    arkansas: 5.1,
    california: 4.2,
    colorado: 4.9,
    connecticut: 8.7,
    delaware: 8.5,
    florida: 4.3,
    georgia: 4.9,
    hawaii: 4.4,
    idaho: 4.3,
    illinois: 4.8,
    indiana: 5.4,
    iowa: 5.3,
    kansas: 5.1,
    kentucky: 5.3,
    louisiana: 5,
    maine: 5.2,
    maryland: 6.6,
    massachusetts: 7.1,
    michigan: 4.1,
    minnesota: 4.5,
    mississippi: 5.1,
    missouri: 5,
    montana: 4.2,
    nebraska: 4.9,
    nevada: 4.3,
    "new-hampshire": 6.5,
    "new-jersey": 7,
    "new-mexico": 4.8,
    "new-york": 4.7,
    "north-carolina": 5.2,
    "north-dakota": 4.8,
    ohio: 5.4,
    oklahoma: 5.1,
    oregon: 4.5,
    pennsylvania: 5.3,
    "rhode-island": 10,
    "south-carolina": 5.5,
    "south-dakota": 4.8,
    tennessee: 5.3,
    texas: 3.7,
    utah: 4.8,
    vermont: 6.6,
    virginia: 5.3,
    washington: 4.7,
    "west-virginia": 5.8,
    wisconsin: 4.9,
    wyoming: 4.8,
  };

  return zooms[stateSlug] ?? 4.8;
}
