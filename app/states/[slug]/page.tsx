import Link from "next/link";
import { notFound } from "next/navigation";
import StateTileMap from "@/components/StateTileMap";
import { CANDIDATES, PRIMARY_DATE, RACE_TITLE } from "@/data/candidates";
import { STATES, getState, hasStateGuide } from "@/data/states";

export function generateStaticParams() {
  return STATES.map((state) => ({ slug: state.slug }));
}

export async function generateMetadata(props: PageProps<"/states/[slug]">) {
  const { slug } = await props.params;
  const state = getState(slug);
  if (!state) return { title: "State not found" };

  return {
    title: `${state.name} primary guide - Raymond's Ballot`,
    description: `Pick up the ${state.name} 2026 primary guide.`,
  };
}

export default async function StatePage(props: PageProps<"/states/[slug]">) {
  const { slug } = await props.params;
  const state = getState(slug);
  if (!state) notFound();

  const isLive = hasStateGuide(state.slug);

  return (
    <article className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="mb-6 text-sm font-data text-ink-muted">
        <Link href="/states" className="hover:text-accent">
          Back to state picker
        </Link>
      </div>

      <header className="border-y-[3px] border-ink py-8">
        <div className="eyebrow mb-3">
          {state.region} / {state.postalAbbreviation}
        </div>
        <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
          <div>
            <h1 className="font-display text-5xl font-black leading-[1.02] tracking-tight md:text-6xl">
              {state.name} primary guide
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-muted">
              {isLive
                ? "This guide is live. Open the full California dashboard for candidate profiles, polling, fundraising, and issue comparisons."
                : "This state page is ready for the next candidate guide. The map keeps the state-picking experience in place while the primary data gets filled in."}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {isLive ? (
                <>
                  <Link
                    href="/"
                    className="border border-ink bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-paper hover:text-ink"
                  >
                    Open full guide
                  </Link>
                  <Link
                    href="/compare"
                    className="border border-rule-soft px-4 py-2 text-sm font-medium transition-colors hover:border-ink hover:bg-paper-deep"
                  >
                    Compare candidates
                  </Link>
                </>
              ) : (
                <Link
                  href="/states"
                  className="border border-rule-soft px-4 py-2 text-sm font-medium transition-colors hover:border-ink hover:bg-paper-deep"
                >
                  Pick another state
                </Link>
              )}
            </div>
          </div>

          <div className="border-l-2 border-rule-soft pl-5">
            <Datum label="Status" value={isLive ? "Live" : "Coming soon"} />
            <Datum label="State" value={state.postalAbbreviation} />
            <Datum label="Region" value={state.region} />
            {isLive && (
              <>
                <Datum label="Race" value={RACE_TITLE} />
                <Datum label="Primary" value={PRIMARY_DATE} />
                <Datum
                  label="Candidates"
                  value={CANDIDATES.length.toString()}
                />
              </>
            )}
          </div>
        </div>
      </header>

      <section className="mt-12">
        <div className="mb-5 border-b-2 border-ink pb-3">
          <div className="eyebrow">All states</div>
          <h2 className="font-display text-3xl font-black tracking-tight">
            Choose a different state
          </h2>
        </div>
        <StateTileMap selectedSlug={state.slug} />
      </section>
    </article>
  );
}

function Datum({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-rule-soft py-2">
      <div className="eyebrow text-[10px]">{label}</div>
      <div className="text-right font-data text-sm tabnum">{value}</div>
    </div>
  );
}
