import Link from "next/link";
import StateTileMap from "@/components/StateTileMap";
import { STATES } from "@/data/states";
import { STATE_GUIDES } from "@/data/stateGuides";

export const metadata = {
  title: "Choose your state - Raymond's Ballot",
  description:
    "Pick a state from the U.S. map, choose your county, and enter an address to find races on your ballot.",
};

export default function StatesPage() {
  const researchedCount = STATE_GUIDES.length;
  const candidateCount = STATE_GUIDES.reduce(
    (sum, guide) => sum + guide.candidates.length,
    0
  );

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-10">
      <header className="border-b-[3px] border-ink pb-8">
        <div className="eyebrow mb-3">Choose your state</div>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.35fr] lg:items-start">
          <div>
            <h1 className="font-display text-5xl font-black leading-[1.02] tracking-tight md:text-6xl">
              Find every race on your ballot.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
              Click on the state where you vote, choose your county, then enter
              your residential address for the contests Google Civic has for
              that exact ballot.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t-2 border-ink pt-5">
              <MiniStat label="States" value={STATES.length.toString()} />
              <MiniStat
                label="Researched"
                value={researchedCount.toString()}
              />
              <MiniStat label="Candidates" value={candidateCount.toString()} />
            </div>
          </div>

          <StateTileMap />
        </div>
      </header>

      <section className="mt-12 grid gap-8 md:grid-cols-3">
        <div className="border-t-2 border-ink pt-4 md:col-span-2">
          <div className="eyebrow mb-2">Featured race guide</div>
          <h2 className="font-display text-3xl font-black tracking-tight">
            California governor, 2026
          </h2>
          <p className="mt-3 leading-relaxed text-ink-muted">
            The California governor comparison is a featured race guide. It is
            supplemental to the address-based ballot lookup, which is the path
            for local, state, federal, and ballot-measure contests.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/states/california"
              className="border border-ink bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              Open California
            </Link>
            <Link
              href="/compare"
              className="border border-rule-soft px-4 py-2 text-sm font-medium transition-colors hover:border-ink hover:bg-paper-deep"
            >
              Compare candidates
            </Link>
          </div>
        </div>

        <div className="border-t-2 border-ink pt-4">
          <div className="eyebrow mb-2">Coverage model</div>
          <p className="text-sm leading-relaxed text-ink-muted">
            State pages start with geography because ballots are local. The
            static candidate cards are featured race context; the complete race
            list comes from the address lookup on county pages.
          </p>
        </div>
      </section>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="eyebrow mb-1 text-[10px]">{label}</div>
      <div className="font-display text-3xl font-black leading-none tracking-tight">
        {value}
      </div>
    </div>
  );
}
