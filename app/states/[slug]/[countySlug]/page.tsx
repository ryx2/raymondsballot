import Link from "next/link";
import { notFound } from "next/navigation";
import CivicBallotLookup from "@/components/CivicBallotLookup";
import CountyPicker from "@/components/CountyPicker";
import StateGuideCandidateCard from "@/components/StateGuideCandidateCard";
import { getCountiesByStateSlug, getCounty } from "@/data/counties";
import { getState } from "@/data/states";
import { getStateGuideOrFallback } from "@/data/stateGuides";

export async function generateMetadata(
  props: PageProps<"/states/[slug]/[countySlug]">
) {
  const { slug, countySlug } = await props.params;
  const state = getState(slug);
  const county = getCounty(slug, countySlug);
  if (!state || !county) return { title: "County not found" };

  return {
    title: `${county.name}, ${state.postalAbbreviation} - Raymond's Ballot`,
    description: `Address-based ballot lookup for ${county.name}, ${state.name}.`,
  };
}

export default async function CountyPage(
  props: PageProps<"/states/[slug]/[countySlug]">
) {
  const { slug, countySlug } = await props.params;
  const state = getState(slug);
  const county = getCounty(slug, countySlug);
  if (!state || !county) notFound();

  const guide = getStateGuideOrFallback(state.slug);
  if (!guide) notFound();

  const counties = getCountiesByStateSlug(state.slug);

  return (
    <article className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="mb-6 text-sm font-data text-ink-muted">
        <Link href={`/states/${state.slug}`} className="hover:text-accent">
          Back to {state.name}
        </Link>
      </div>

      <header className="border-y-[3px] border-ink py-8">
        <div className="eyebrow mb-3">
          {state.postalAbbreviation} / {county.fips}
        </div>
        <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
          <div>
            <h1 className="font-display text-5xl font-black leading-[1.02] tracking-tight md:text-6xl">
              {county.name}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-muted">
              Enter a residential address in {county.name} to pull the races
              and ballot measures Google Civic has for that exact ballot. The
              featured statewide race section below is supplemental context,
              not the complete ballot.
            </p>
          </div>

          <div className="border-l-2 border-rule-soft pl-5">
            <Datum label="State" value={state.name} />
            <Datum label="County" value={county.name} />
            <Datum label="FIPS" value={county.fips} />
            <Datum label="Lookup" value="Address based" />
            <Datum label="Featured race" value={statusText(guide.status)} />
            <Datum
              label="Featured candidates"
              value={guide.candidates.length.toString()}
            />
          </div>
        </div>
      </header>

      <section className="mt-12">
        <CountyPicker
          stateSlug={state.slug}
          counties={counties}
          selectedCountySlug={county.slug}
        />
      </section>

      <section className="mt-12">
        <CivicBallotLookup
          countyName={county.name}
          stateName={state.name}
          statePostalAbbreviation={state.postalAbbreviation}
        />
      </section>

      <section className="mt-12">
        <div className="mb-6 border-b-2 border-ink pb-3">
          <div className="eyebrow">Featured statewide race</div>
          <h2 className="font-display text-3xl font-black tracking-tight">
            {guide.stateName} {guide.office} context
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-muted">
            This is one featured statewide race. Use the address lookup above
            for the local races, district races, judicial contests, and ballot
            measures that can vary by precinct.
          </p>
        </div>

        {guide.candidates.length > 0 ? (
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
              ? `${guide.stateName} does not have a featured 2026 governor race here. The address lookup above is still the path for available ballot contests.`
              : guide.summary}
          </div>
        )}
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
