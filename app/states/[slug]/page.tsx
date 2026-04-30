import Link from "next/link";
import { notFound } from "next/navigation";
import CountyPicker from "@/components/CountyPicker";
import StateTileMap from "@/components/StateTileMap";
import StateGuideCandidateCard from "@/components/StateGuideCandidateCard";
import { getCountiesByStateSlug } from "@/data/counties";
import { STATES, getState } from "@/data/states";
import { getStateGuideOrFallback } from "@/data/stateGuides";

export function generateStaticParams() {
  return STATES.map((state) => ({ slug: state.slug }));
}

export async function generateMetadata(props: PageProps<"/states/[slug]">) {
  const { slug } = await props.params;
  const state = getState(slug);
  if (!state) return { title: "State not found" };
  const guide = getStateGuideOrFallback(state.slug);
  if (!guide) return { title: "State not found" };

  return {
    title: `${guide.stateName} ballot lookup - Raymond's Ballot`,
    description: `Choose a county in ${guide.stateName}, then enter a residential address to find contests on that ballot.`,
  };
}

export default async function StatePage(props: PageProps<"/states/[slug]">) {
  const { slug } = await props.params;
  const state = getState(slug);
  if (!state) notFound();

  const guide = getStateGuideOrFallback(state.slug);
  if (!guide) notFound();

  const hasCaliforniaDashboard = state.slug === "california";
  const hasCandidates = guide.candidates.length > 0;
  const statusLabel = statusText(guide.status);
  const counties = getCountiesByStateSlug(state.slug);

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
              {state.name} ballot lookup
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-muted">
              Start by choosing the county where you vote. The county page asks
              for a residential address because one county can contain many
              congressional, legislative, judicial, school, city, and ballot
              measure districts.
            </p>
            {hasCaliforniaDashboard && (
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="border border-ink bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-paper hover:text-ink"
                >
                  Open featured governor guide
                </Link>
                <Link
                  href="/compare"
                  className="border border-rule-soft px-4 py-2 text-sm font-medium transition-colors hover:border-ink hover:bg-paper-deep"
                >
                  Compare featured candidates
                </Link>
              </div>
            )}
          </div>

          <div className="border-l-2 border-rule-soft pl-5">
            <Datum label="State" value={state.postalAbbreviation} />
            <Datum label="Region" value={state.region} />
            <Datum label="Counties" value={counties.length.toString()} />
            <Datum label="Lookup" value="Address based" />
            <Datum label="Featured race" value={guide.office} />
            <Datum label="Featured status" value={statusLabel} />
            <Datum
              label="Featured primary"
              value={guide.primaryDate ?? "No 2026 governor primary"}
            />
            <Datum
              label="Featured candidates"
              value={guide.candidates.length.toString()}
            />
          </div>
        </div>
      </header>

      <section className="mt-12">
        <CountyPicker stateSlug={state.slug} counties={counties} />
      </section>

      <section className="mt-12">
        <div className="mb-6 border-b-2 border-ink pb-3">
          <div className="eyebrow">Featured statewide race</div>
          <h2 className="font-display text-3xl font-black tracking-tight">
            {hasCandidates
              ? `${guide.stateName} ${guide.office} context`
              : "No featured governor race tracked"}
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-muted">
            These cards are extra context for one major statewide race. They are
            not the full ballot; use the county map above for the address-based
            race list.
          </p>
        </div>

        {hasCandidates ? (
          <div className="grid gap-x-8 gap-y-10 md:grid-cols-2">
            {guide.candidates.map((candidate) => (
              <StateGuideCandidateCard
                key={candidate.id}
                candidate={candidate}
              />
            ))}
          </div>
        ) : (
          <div className="border-l-4 border-rule-soft pl-5 text-ink-muted">
            {guide.status === "no-2026-governor-race"
              ? `${guide.stateName} does not hold a regularly scheduled governor election in 2026. That does not mean there are no 2026 contests; pick a county above for the exact ballot lookup.`
              : "Featured race data for this state still needs source review before publishing."}
          </div>
        )}
      </section>

      {guide.sourceUrls.length > 0 && (
        <section className="mt-12 border-t-2 border-ink pt-5">
          <div className="eyebrow mb-3">Featured race sources</div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {guide.sourceUrls.map((sourceUrl) => (
              <a
                key={sourceUrl}
                href={sourceUrl}
                className="text-accent hover:underline"
              >
                {sourceLabel(sourceUrl)}
              </a>
            ))}
          </div>
        </section>
      )}

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

function statusText(status: string): string {
  switch (status) {
    case "live":
      return "Live";
    case "researched":
      return "Researched";
    case "no-2026-governor-race":
      return "No featured governor race";
    default:
      return "Needs review";
  }
}

function sourceLabel(sourceUrl: string): string {
  try {
    return new URL(sourceUrl).hostname.replace(/^www\./, "");
  } catch {
    return sourceUrl;
  }
}

function Datum({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-rule-soft py-2">
      <div className="eyebrow text-[10px]">{label}</div>
      <div className="text-right font-data text-sm tabnum">{value}</div>
    </div>
  );
}
