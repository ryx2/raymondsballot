import Link from "next/link";
import { CANDIDATES, ISSUES, PRIMARY_DATE } from "@/data/candidates";

export const metadata = {
  title: "About — California 2026",
  description:
    "How we built the comparison: methodology, sources, and editorial choices.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12">
      <div className="eyebrow mb-2">About this project</div>
      <h1 className="font-display font-black text-5xl leading-[1.02] tracking-tight">
        How we built the comparison.
      </h1>
      <p className="mt-6 text-lg text-ink-muted leading-relaxed">
        California's June 2, 2026 primary is the most consequential Democratic
        gubernatorial contest in a generation. With six serious candidates and
        a near-majority of voters undecided, the difference between coverage
        that drives understanding and coverage that drives noise comes down to
        whether you can put candidates on the same axis.
      </p>

      <section className="mt-12 space-y-4 border-t-2 border-ink pt-6">
        <div className="eyebrow">Methodology</div>
        <h2 className="font-display font-black text-2xl tracking-tight">
          One framework, applied to every candidate.
        </h2>
        <p className="text-ink-muted leading-relaxed">
          Each candidate was scored on the same eight issues using a five-step
          stance scale: <em>strongly opposes</em>, <em>opposes</em>,{" "}
          <em>mixed</em>, <em>supports</em>, <em>strongly supports</em>. Scores
          were drawn from voting records, official campaign positions, and
          on-the-record statements in California political coverage.
        </p>
        <p className="text-ink-muted leading-relaxed">
          Where a candidate has shifted on an issue, the most recent stated
          position is recorded — with the historical context noted in the
          detail text rather than allowed to swing the score.
        </p>
      </section>

      <section className="mt-12 space-y-4 border-t-2 border-ink pt-6">
        <div className="eyebrow">The eight issues</div>
        <ul className="space-y-2">
          {ISSUES.map((i) => (
            <li key={i.key} className="border-l-2 border-rule-soft pl-3">
              <span className="font-display font-bold">{i.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 space-y-4 border-t-2 border-ink pt-6">
        <div className="eyebrow">Field</div>
        <h2 className="font-display font-black text-2xl tracking-tight">
          Who's in this comparison
        </h2>
        <p className="text-ink-muted leading-relaxed">
          We include every Democrat polling above one percent in publicly
          released surveys and every Democrat who has filed with the California
          Secretary of State and reported at least seven figures of cumulative
          fundraising. The {PRIMARY_DATE} ballot includes additional minor
          candidates not profiled here.
        </p>
        <ul className="grid sm:grid-cols-2 gap-2 mt-4">
          {CANDIDATES.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/candidate/${c.slug}`}
                className="hover:text-accent font-medium"
              >
                {c.fullName} —{" "}
                <span className="text-ink-muted">{c.currentRole}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 space-y-4 border-t-2 border-ink pt-6">
        <div className="eyebrow">What is — and isn't — sourced</div>
        <p className="text-ink-muted leading-relaxed">
          Polling averages and fundraising totals on this prototype are
          illustrative placeholders. Before publication, replace them with
          weighted averages from Berkeley IGS, PPIC, and the Public Policy
          Institute of California, and with cumulative receipts pulled from{" "}
          <a
            className="text-accent hover:underline"
            href="https://cal-access.sos.ca.gov"
          >
            Cal-Access
          </a>
          .
        </p>
        <p className="text-ink-muted leading-relaxed">
          Each issue position should be updated as the campaign progresses, and
          new candidates should be added to{" "}
          <code className="font-data text-sm bg-paper-deep px-1.5 py-0.5">
            data/candidates.ts
          </code>{" "}
          using the existing schema.
        </p>
      </section>

      <section className="mt-12 space-y-4 border-t-2 border-ink pt-6">
        <div className="eyebrow">Get on the ballot</div>
        <p className="text-ink-muted leading-relaxed">
          The California Democratic primary for Governor is{" "}
          <span className="font-data text-ink">{PRIMARY_DATE}</span>. Mail
          ballots are sent in early May. Confirm your registration at{" "}
          <a
            href="https://registertovote.ca.gov"
            className="text-accent hover:underline"
          >
            registertovote.ca.gov
          </a>{" "}
          and find your polling place at{" "}
          <a
            href="https://www.sos.ca.gov/elections/polling-place"
            className="text-accent hover:underline"
          >
            sos.ca.gov
          </a>
          .
        </p>
      </section>
    </div>
  );
}
