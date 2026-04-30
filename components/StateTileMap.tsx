"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import statesAtlas from "us-atlas/states-10m.json";
import { STATES, StateRegion, USState } from "@/data/states";

const REGION_STYLES: Record<
  StateRegion,
  { bg: string; hover: string; stroke: string; fg: string; label: string }
> = {
  Northeast: {
    bg: "#c4d4e8",
    hover: "#9eb9d9",
    stroke: "#2c5282",
    fg: "#14304f",
    label: "Northeast",
  },
  Midwest: {
    bg: "#e6c46f",
    hover: "#d4a017",
    stroke: "#8b6500",
    fg: "#3d2c00",
    label: "Midwest",
  },
  South: {
    bg: "#f3c8b9",
    hover: "#e9a48d",
    stroke: "#a82a1d",
    fg: "#4c160f",
    label: "South",
  },
  West: {
    bg: "#b8d7ca",
    hover: "#8fbea9",
    stroke: "#1d4f3f",
    fg: "#0d2b22",
    label: "West",
  },
};

const REGIONS: StateRegion[] = ["West", "Midwest", "South", "Northeast"];
const STATES_BY_NAME = new Map(STATES.map((state) => [state.name, state]));

interface Props {
  selectedSlug?: string;
  className?: string;
  showList?: boolean;
}

export default function StateTileMap({
  selectedSlug,
  className = "",
  showList = true,
}: Props) {
  return (
    <div className={className}>
      <div className="border-2 border-ink bg-paper-deep p-3 md:p-5">
        <ComposableMap
          projection="geoAlbersUsa"
          width={975}
          height={610}
          className="h-auto w-full"
          aria-label="United States map"
        >
          <ZoomableGroup zoom={1} center={[-96, 38]} translateExtent={[
            [0, 0],
            [975, 610],
          ]}>
            <Geographies geography={statesAtlas}>
              {({ geographies }) =>
                geographies.map((geography) => {
                  const state = STATES_BY_NAME.get(geography.properties.name);
                  if (!state) {
                    return (
                      <Geography
                        key={geography.rsmKey}
                        geography={geography}
                        fill="#d8d2c1"
                        stroke="#bdb7a8"
                        strokeWidth={0.7}
                        style={{
                          default: { outline: "none" },
                          hover: { outline: "none" },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  }

                  return (
                    <StateGeography
                      key={geography.rsmKey}
                      state={state}
                      geography={geography}
                      selected={selectedSlug === state.slug}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>

      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-ink-muted">
        {REGIONS.map((region) => {
          const style = REGION_STYLES[region];
          return (
            <div key={region} className="flex items-center gap-1.5">
              <span
                className="h-3 w-3 border"
                style={{ background: style.bg, borderColor: style.stroke }}
              />
              <span>{style.label}</span>
            </div>
          );
        })}
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 border-2 border-ink bg-ink" />
          <span>Selected</span>
        </div>
      </div>

      {showList && (
        <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:hidden">
          {STATES.map((state) => (
            <a
              key={state.slug}
              href={`/states/${state.slug}`}
              className="flex items-center justify-between border border-rule-soft bg-paper px-3 py-2 text-sm transition-colors hover:border-ink hover:bg-paper-deep"
            >
              <span className="truncate">{state.name}</span>
              <span className="font-data text-xs text-ink-muted">
                {state.postalAbbreviation}
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function StateGeography({
  state,
  geography,
  selected,
}: {
  state: USState;
  geography: Parameters<typeof Geography>[0]["geography"];
  selected: boolean;
}) {
  const style = REGION_STYLES[state.region];
  const fill = selected ? "var(--ink)" : style.bg;
  const stroke = selected ? "var(--paper)" : "var(--paper)";

  return (
    <a href={`/states/${state.slug}`} aria-label={`${state.name} ballot lookup`}>
      <title>
        {state.name} ({state.postalAbbreviation})
      </title>
      <Geography
        geography={geography}
        fill={fill}
        stroke={stroke}
        strokeWidth={selected ? 1.4 : 0.75}
        style={{
          default: {
            outline: "none",
            transition: "fill 160ms ease, stroke-width 160ms ease",
          },
          hover: {
            fill: selected ? "var(--ink)" : style.hover,
            outline: "none",
            stroke: "var(--ink)",
            strokeWidth: 1.4,
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
