import Link from "next/link";
import {
  READY_STATE_SLUGS,
  STATES,
  StateRegion,
  USState,
} from "@/data/states";

const REGION_STYLES: Record<
  StateRegion,
  { bg: string; border: string; fg: string; label: string }
> = {
  Northeast: {
    bg: "#c4d4e8",
    border: "#2c5282",
    fg: "#14304f",
    label: "Northeast",
  },
  Midwest: {
    bg: "#e6c46f",
    border: "#8b6500",
    fg: "#3d2c00",
    label: "Midwest",
  },
  South: {
    bg: "#f3c8b9",
    border: "#a82a1d",
    fg: "#4c160f",
    label: "South",
  },
  West: {
    bg: "#b8d7ca",
    border: "#1d4f3f",
    fg: "#0d2b22",
    label: "West",
  },
};

const REGIONS: StateRegion[] = ["West", "Midwest", "South", "Northeast"];

interface Props {
  availableStateSlugs?: readonly string[];
  selectedSlug?: string;
  className?: string;
  showList?: boolean;
}

export default function StateTileMap({
  availableStateSlugs = READY_STATE_SLUGS,
  selectedSlug,
  className = "",
  showList = true,
}: Props) {
  const available = new Set(availableStateSlugs);

  return (
    <div className={className}>
      <div className="overflow-x-auto pb-2" aria-label="United States map">
        <div
          className="grid min-w-[680px] gap-1.5 md:min-w-0 md:gap-2"
          style={{
            gridTemplateColumns: "repeat(11, minmax(0, 1fr))",
            gridTemplateRows: "repeat(8, minmax(42px, 1fr))",
          }}
        >
          {STATES.map((state) => (
            <StateTile
              key={state.slug}
              state={state}
              isAvailable={available.has(state.slug)}
              isSelected={selectedSlug === state.slug}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-ink-muted">
        {REGIONS.map((region) => {
          const style = REGION_STYLES[region];
          return (
            <div key={region} className="flex items-center gap-1.5">
              <span
                className="h-3 w-3 border"
                style={{ background: style.bg, borderColor: style.border }}
              />
              <span>{style.label}</span>
            </div>
          );
        })}
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 border-2 border-ink bg-paper" />
          <span>Guide live</span>
        </div>
      </div>

      {showList && (
        <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:hidden">
          {STATES.map((state) => (
            <Link
              key={state.slug}
              href={`/states/${state.slug}`}
              className="flex items-center justify-between border border-rule-soft bg-paper px-3 py-2 text-sm transition-colors hover:border-ink hover:bg-paper-deep"
            >
              <span className="truncate">{state.name}</span>
              <span className="font-data text-xs text-ink-muted">
                {state.postalAbbreviation}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function StateTile({
  state,
  isAvailable,
  isSelected,
}: {
  state: USState;
  isAvailable: boolean;
  isSelected: boolean;
}) {
  const style = REGION_STYLES[state.region];

  return (
    <Link
      href={`/states/${state.slug}`}
      aria-current={isSelected ? "page" : undefined}
      aria-label={`${state.name} primary guide${
        isAvailable ? " is live" : " is coming soon"
      }`}
      title={state.name}
      className={[
        "group relative flex aspect-square min-h-10 items-center justify-center border-2 text-center transition-all",
        "hover:-translate-y-0.5 hover:shadow-[3px_3px_0_var(--ink)] focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 focus:ring-offset-paper",
        isSelected ? "shadow-[4px_4px_0_var(--ink)]" : "",
        isAvailable ? "font-black" : "font-bold opacity-85",
      ].join(" ")}
      style={{
        gridColumn: state.tile.col + 1,
        gridRow: state.tile.row + 1,
        background: isSelected ? "var(--ink)" : style.bg,
        borderColor: isAvailable || isSelected ? "var(--ink)" : style.border,
        color: isSelected ? "var(--paper)" : style.fg,
      }}
    >
      <span className="font-display text-sm tracking-normal md:text-base">
        {state.postalAbbreviation}
      </span>
      {isAvailable && (
        <span
          className="absolute right-1 top-1 h-1.5 w-1.5 bg-accent"
          aria-hidden
        />
      )}
    </Link>
  );
}
