import Link from "next/link";
import {
  CANDIDATES,
  ISSUES,
  PRIMARY_DATE,
  UNDECIDED_PCT,
} from "@/data/candidates";
import CandidateAvatar from "@/components/CandidateAvatar";
import HBar from "@/components/HBar";
import StanceCell from "@/components/StanceCell";

const TODAY = new Date("2026-04-29");
const PRIMARY_DAY = new Date("2026-06-02");
const DAYS_UNTIL = Math.max(
  0,
  Math.round((PRIMARY_DAY.getTime() - TODAY.getTime()) / 86_400_000)
);

export default function Home() {
  const ranked = [...CANDIDATES].sort((a, b) => b.pollAverage - a.pollAverage);
  const leader = ranked[0];
  const totalRaised = CANDIDATES.reduce(
    (s, c) => s + c.fundraisingMillions,
    0
  );
  const maxPoll = Math.max(...CANDIDATES.map((c) => c.pollAverage), UNDECIDED_PCT);
  const maxFunds = Math.max(...CANDIDATES.map((c) => c.fundraisingMillions));

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-10">
      {/* HERO */}
      <section className="border-b-2 border-ink pb-8">
        <div className="eyebrow mb-4">
          A race-watch dashboard · Updated April 29, 2026
        </div>
        <h1 className="font-display font-black text-[2.6rem] md:text-6xl leading-[1.02] tracking-tight max-w-4xl">
          Six Democrats are running to lead California after Newsom.{" "}
          <span className="text-accent">Here's where they actually stand.</span>
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-ink-muted leading-relaxed">
          With Gavin Newsom term-limited, the {PRIMARY_DATE} primary is the most
          consequential California Democratic gubernatorial contest in a
          generation. We've boiled each campaign down to the same eight issue
          questions so you can compare them apples-to-apples — not soundbite to
          soundbite.
        </p>

        {/* QUICK STATS ROW */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 border-t-2 border-ink pt-6">
          <Stat
            label="Days to primary"
            value={DAYS_UNTIL.toString()}
            sub={PRIMARY_DATE}
          />
          <Stat
            label="Major Dem candidates"
            value={CANDIDATES.length.toString()}
            sub="On the ballot"
          />
          <Stat
            label="Poll leader"
            value={leader.lastName}
            sub={`${leader.pollAverage}% support`}
            accent
          />
          <Stat
            label="Combined raised"
            value={`$${totalRaised.toFixed(1)}M`}
            sub="Across the field"
          />
        </div>
      </section>

      {/* STATE OF THE RACE */}
      <section className="mt-12 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3 space-y-3">
          <div className="eyebrow">The state of the race</div>
          <h2 className="font-display font-black text-3xl md:text-4xl leading-tight tracking-tight">
            Porter leads a fractured field, with four in single digits.
          </h2>
          <p className="text-ink-muted leading-relaxed">
            California uses a top-two primary, so the two highest finishers
            advance to November regardless of party. With Republicans drawing
            roughly a third of the statewide vote, the Democratic field is
            effectively running for one November slot — and a near-majority of
            primary voters say they're undecided.
          </p>

          <div className="mt-6 rounded-sm border border-rule-soft bg-paper p-5">
            <div className="eyebrow mb-3">Average primary support · April 2026</div>
            <div className="space-y-2">
              {ranked.map((c) => (
                <HBar
                  key={c.slug}
                  value={c.pollAverage}
                  max={maxPoll}
                  color={c.color}
                  label={c.lastName}
                  rightLabel={`${c.pollAverage}%`}
                />
              ))}
              <HBar
                value={UNDECIDED_PCT}
                max={maxPoll}
                color="#8a8a8a"
                label="Undecided"
                rightLabel={`${UNDECIDED_PCT}%`}
              />
            </div>
            <div className="mt-3 text-xs text-ink-faint font-data">
              Illustrative average · placeholder data, replace with sourced
              polling
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-3">
          <div className="eyebrow">Money in the bank</div>
          <h2 className="font-display font-black text-2xl md:text-3xl leading-tight tracking-tight">
            Kounalakis and Porter dominate the money primary.
          </h2>
          <p className="text-ink-muted leading-relaxed">
            Kounalakis launched earliest and built the largest war chest;
            Porter's small-donor network closes most of the gap.
          </p>

          <div className="mt-4 rounded-sm border border-rule-soft bg-paper p-5">
            <div className="eyebrow mb-3">Cumulative fundraising · $M</div>
            <div className="space-y-2">
              {[...CANDIDATES]
                .sort((a, b) => b.fundraisingMillions - a.fundraisingMillions)
                .map((c) => (
                  <HBar
                    key={c.slug}
                    value={c.fundraisingMillions}
                    max={maxFunds}
                    color={c.color}
                    label={c.lastName}
                    rightLabel={`$${c.fundraisingMillions.toFixed(1)}M`}
                  />
                ))}
            </div>
            <div className="mt-3 text-xs text-ink-faint font-data">
              Illustrative · replace with Cal-Access filings
            </div>
          </div>
        </div>
      </section>

      {/* THE FIELD */}
      <section className="mt-20">
        <div className="flex items-baseline justify-between border-b-2 border-ink pb-3 mb-6">
          <div>
            <div className="eyebrow">The field</div>
            <h2 className="font-display font-black text-3xl md:text-4xl leading-tight tracking-tight">
              Six candidates. One ballot.
            </h2>
          </div>
          <Link
            href="/compare"
            className="text-sm font-medium text-accent hover:underline shrink-0 ml-4"
          >
            Compare side-by-side →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
          {ranked.map((c) => {
            const sigPos = c.positions[c.signatureIssue];
            const sigLabel = ISSUES.find((i) => i.key === c.signatureIssue)
              ?.label;
            return (
              <Link
                key={c.slug}
                href={`/candidate/${c.slug}`}
                className="group block border-t-2 border-ink pt-5 hover:bg-paper-deep -mx-2 px-2 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <CandidateAvatar
                    name={c.fullName}
                    color={c.color}
                    size={64}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display font-black text-2xl tracking-tight leading-none truncate">
                        {c.fullName}
                      </h3>
                      <div className="font-data text-sm tabnum text-ink-muted shrink-0">
                        {c.pollAverage}%
                      </div>
                    </div>
                    <div className="mt-1 text-sm text-ink-muted">
                      {c.currentRole}
                    </div>
                    <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-ink-faint font-data uppercase tracking-wider">
                      <span>{c.lane}</span>
                      <span>·</span>
                      <span>{c.region}</span>
                      <span>·</span>
                      <span>${c.fundraisingMillions.toFixed(1)}M raised</span>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-[15px] text-ink leading-relaxed">
                  {c.pitch}
                </p>

                <div className="mt-5 rounded-sm bg-paper-deep/60 border border-rule-soft p-3">
                  <div className="eyebrow mb-2 text-[10px]">
                    Signature issue · {sigLabel}
                  </div>
                  <StanceCell
                    stance={sigPos.stance}
                    headline={sigPos.headline}
                    compact
                  />
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {ISSUES.slice(0, 8).map((i) => {
                      const s = c.positions[i.key];
                      const colors: Record<string, string> = {
                        "strong-for": "var(--green)",
                        "for": "#5fa982",
                        mixed: "var(--gold)",
                        against: "#e08566",
                        "strong-against": "var(--accent-deep)",
                        unclear: "#cccccc",
                      };
                      return (
                        <div
                          key={i.key}
                          title={`${i.label}: ${s.headline}`}
                          className="w-3 h-3"
                          style={{ background: colors[s.stance], borderRadius: 1 }}
                        />
                      );
                    })}
                  </div>
                  <span className="text-xs font-medium text-ink group-hover:text-accent">
                    Read profile →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="mt-24 border-t-[3px] border-ink pt-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="eyebrow mb-2">How we built this</div>
            <p className="text-sm text-ink-muted leading-relaxed">
              Each candidate's record was distilled into the same eight issue
              questions, scored on a five-step stance scale from{" "}
              <em>strongly opposes</em> to <em>strongly supports</em>. Scores
              come from voting records, official campaign positions, and
              on-the-record statements.
            </p>
          </div>
          <div>
            <div className="eyebrow mb-2">What's illustrative</div>
            <p className="text-sm text-ink-muted leading-relaxed">
              Polling averages and fundraising totals are placeholder values for
              this prototype. They should be replaced with sourced figures from
              Berkeley IGS, PPIC, and California's Cal-Access campaign filings
              before publication.
            </p>
          </div>
          <div>
            <div className="eyebrow mb-2">Get the ballot</div>
            <p className="text-sm text-ink-muted leading-relaxed">
              California's primary is{" "}
              <span className="font-data text-ink">{PRIMARY_DATE}</span>. Mailed
              ballots arrive in early May. Confirm your registration at{" "}
              <a
                className="text-accent hover:underline"
                href="https://registertovote.ca.gov"
              >
                registertovote.ca.gov
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({
  label,
  value,
  sub,
  accent = false,
}: {
  label: string;
  value: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <div>
      <div className="eyebrow mb-1">{label}</div>
      <div
        className={`font-display font-black text-3xl md:text-4xl leading-none tracking-tight ${
          accent ? "text-accent" : ""
        }`}
      >
        {value}
      </div>
      <div className="mt-1 text-xs text-ink-muted font-data tabnum">{sub}</div>
    </div>
  );
}
