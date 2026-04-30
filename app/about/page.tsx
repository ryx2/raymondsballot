import Link from "next/link";
import { CANDIDATES, ISSUES, PRIMARY_DATE } from "@/data/candidates";

export const metadata = {
  title: "About — Raymond's Ballot",
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
        California&apos;s June 2, 2026 primary is the most consequential
        gubernatorial contest in a generation. Because California uses a top-two
        primary, the two highest finishers — regardless of party — advance to
        November. We profile the leading Democrats and Republicans on the same
        eight issues so you can compare them apples-to-apples instead of
        soundbite to soundbite.
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
          Who&apos;s in this comparison
        </h2>
        <p className="text-ink-muted leading-relaxed">
          We profile every Democrat and Republican who qualified for the May 5,
          2026 CNN gubernatorial debate, plus Tony Thurmond. Eric Swalwell
          suspended his campaign on April 12, 2026 and Betty Yee suspended
          hers on April 20. The {PRIMARY_DATE} ballot includes 61 total
          candidates, most of whom are minor and not profiled here.
        </p>
        <ul className="grid sm:grid-cols-2 gap-2 mt-4">
          {CANDIDATES.map((c) => (
            <li key={c.slug} className="flex items-baseline gap-2">
              <span
                className="font-data text-[10px] uppercase tracking-wider font-bold px-1 py-0.5 shrink-0"
                style={{
                  background:
                    c.party === "Democratic" ? "#1d4ed8" : "#b91c1c",
                  color: "white",
                  borderRadius: 2,
                }}
              >
                {c.party === "Democratic" ? "DEM" : "REP"}
              </span>
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
        <div className="eyebrow">What is — and isn&apos;t — sourced</div>
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
        <div className="eyebrow">Photos</div>
        <p className="text-ink-muted leading-relaxed">
          Candidate portraits are sourced from Wikimedia Commons. Each
          candidate&apos;s profile page lists the original credit (campaign portrait,
          official government portrait, etc.) per the project&apos;s licensing terms.
        </p>
      </section>

      <section className="mt-12 space-y-4 border-t-2 border-ink pt-6">
        <div className="eyebrow">Get on the ballot</div>
        <p className="text-ink-muted leading-relaxed">
          California&apos;s primary for Governor is{" "}
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
