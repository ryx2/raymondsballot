import Link from "next/link";
import StateTileMap from "@/components/StateTileMap";
import { STATES } from "@/data/states";
import { STATE_GUIDES } from "@/data/stateGuides";

export const metadata = {
  title: "Choose your state - Raymond's Ballot",
  description:
    "Pick a state from the U.S. map to open its 2026 primary guide.",
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
              Find your 2026 primary guide.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
              Pick your state from the map. California is live now, and the
              state pages are being filled with governor-primary candidate
              data, source links, and usable candidate portraits.
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
          <div className="eyebrow mb-2">Live guide</div>
          <h2 className="font-display text-3xl font-black tracking-tight">
            California governor, 2026
          </h2>
          <p className="mt-3 leading-relaxed text-ink-muted">
            The California page already has the full comparison: candidate
            profiles, polling, fundraising, issue stances, and a side-by-side
            matrix.
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
            Each state page is structured as a primary guide entry point. The
            map gives users one obvious first action before they get into a
            candidate-specific dashboard, and states without 2026 governor
            elections are labeled clearly.
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
