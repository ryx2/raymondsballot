import Link from "next/link";
import {
  CANDIDATES,
  DEMS,
  REPS,
  ISSUES,
  PRIMARY_DATE,
  UNDECIDED_PCT,
  Candidate,
  Party,
} from "@/data/candidates";
import CandidateAvatar from "@/components/CandidateAvatar";
import HBar from "@/components/HBar";
import StanceCell from "@/components/StanceCell";
import PositioningChart from "@/components/PositioningChart";
import StateTileMap from "@/components/StateTileMap";
import { READY_STATE_SLUGS, STATES } from "@/data/states";

const TODAY = new Date("2026-04-29");
const PRIMARY_DAY = new Date("2026-06-02");
const DAYS_UNTIL = Math.max(
  0,
  Math.round((PRIMARY_DAY.getTime() - TODAY.getTime()) / 86_400_000)
);

export default function Home() {
  const ranked = [...CANDIDATES].sort((a, b) => b.pollAverage - a.pollAverage);
  const leader = ranked[0];
  const runnerUp = ranked[1];
  const totalRaised = CANDIDATES.reduce((s, c) => s + c.fundraisingMillions, 0);
  const maxPoll = Math.max(
    ...CANDIDATES.map((c) => c.pollAverage),
    UNDECIDED_PCT
  );
  const maxFunds = Math.max(...CANDIDATES.map((c) => c.fundraisingMillions));

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-10">
      {/* STATE PICKER */}
      <section className="border-b-[3px] border-ink pb-10">
        <div className="eyebrow mb-3">Choose your state</div>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.35fr] lg:items-start">
          <div>
            <h1 className="font-display text-[2.7rem] font-black leading-[1.02] tracking-tight md:text-6xl">
              Pick the state where you vote.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
              Start from the U.S. map, then open the primary guide for your
              state. California is live now, and the rest of the map is ready
              for state-by-state guides as they are added.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-5 border-t-2 border-ink pt-5">
              <Stat
                label="States"
                value={STATES.length.toString()}
                sub="Pick from the map"
              />
              <Stat
                label="Live guide"
                value={READY_STATE_SLUGS.length.toString()}
                sub="California now"
                accent
              />
            </div>
            <Link
              href="/states"
              className="mt-6 inline-flex border border-ink bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              Open state picker
            </Link>
          </div>

          <StateTileMap showList={false} />
        </div>
      </section>

      {/* HERO */}
      <section className="mt-12 border-b-2 border-ink pb-8">
        <div className="eyebrow mb-4">
          A race-watch dashboard · Updated April 29, 2026
        </div>
        <h1 className="font-display font-black text-[2.6rem] md:text-6xl leading-[1.02] tracking-tight max-w-4xl">
          Eight people are running to lead California after Newsom.{" "}
          <span className="text-accent">Here&apos;s where they actually stand.</span>
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-ink-muted leading-relaxed">
          With Gavin Newsom term-limited, the {PRIMARY_DATE} top-two primary is
          the most consequential California gubernatorial contest in a
          generation. Six Democrats and two Republicans are competing — but only
          the top two finishers, regardless of party, advance to November. We&apos;ve
          boiled each campaign down to the same eight issue questions so you
          can compare them apples-to-apples.
        </p>

        {/* PHOTO STRIP */}
        <div className="mt-10 grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-3">
          {ranked.map((c) => (
            <Link
              key={c.slug}
              href={`/candidate/${c.slug}`}
              className="group block"
              title={c.fullName}
            >
              <CandidateAvatar
                name={c.fullName}
                color={c.color}
                imageUrl={c.imageUrl}
                size={130}
                className="!w-full aspect-square transition-transform group-hover:-translate-y-0.5"
              />
              <div className="mt-1.5 flex items-baseline justify-between gap-1">
                <span className="font-display font-bold text-[13px] tracking-tight truncate">
                  {c.lastName}
                </span>
                <span
                  className="font-data text-[10px] tabnum shrink-0"
                  style={{ color: c.color }}
                >
                  {c.pollAverage}%
                </span>
              </div>
              <div
                className="text-[10px] font-data uppercase tracking-wider"
                style={{ color: c.party === "Democratic" ? "#1d4ed8" : "#b91c1c" }}
              >
                {c.party === "Democratic" ? "DEM" : "REP"}
              </div>
            </Link>
          ))}
        </div>

        {/* QUICK STATS ROW */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 border-t-2 border-ink pt-6">
          <Stat
            label="Days to primary"
            value={DAYS_UNTIL.toString()}
            sub={PRIMARY_DATE}
          />
          <Stat
            label="Candidates profiled"
            value={CANDIDATES.length.toString()}
            sub={`${DEMS.length} Democrats · ${REPS.length} Republicans`}
          />
          <Stat
            label="Poll leader"
            value={leader.lastName}
            sub={`${leader.pollAverage}% · ${leader.party.slice(0, 3).toUpperCase()}`}
            accent
          />
          <Stat
            label="Combined raised"
            value={`$${totalRaised.toFixed(1)}M`}
            sub="Across the field"
          />
        </div>
      </section>

      {/* TOP-LINE POLL CHART */}
      <section className="mt-12 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3 space-y-3">
          <div className="eyebrow">The state of the race</div>
          <h2 className="font-display font-black text-3xl md:text-4xl leading-tight tracking-tight">
            {leader.lastName} and {runnerUp.lastName} are running for{" "}
            <span className="text-accent">two slots</span>, not one.
          </h2>
          <p className="text-ink-muted leading-relaxed">
            California&apos;s top-two primary advances the two highest finishers
            regardless of party — meaning a fragmented Democratic field and a
            consolidated Republican one could plausibly send two Republicans to
            November. The polling shows that risk is real.
          </p>

          <div className="mt-6 rounded-sm border border-rule-soft bg-paper p-5">
            <div className="eyebrow mb-3">
              Average primary support · April 2026
            </div>
            <div className="space-y-2">
              {ranked.map((c) => (
                <div key={c.slug} className="flex items-center gap-2">
                  <CandidateAvatar
                    name={c.fullName}
                    color={c.color}
                    imageUrl={c.imageUrl}
                    size={22}
                    rounded="circle"
                  />
                  <HBar
                    value={c.pollAverage}
                    max={maxPoll}
                    color={c.color}
                    label={c.lastName}
                    rightLabel={`${c.pollAverage}%`}
                    className="flex-1"
                  />
                </div>
              ))}
              <div className="flex items-center gap-2">
                <div
                  className="shrink-0 rounded-full"
                  style={{
                    width: 22,
                    height: 22,
                    background: "#8a8a8a",
                  }}
                />
                <HBar
                  value={UNDECIDED_PCT}
                  max={maxPoll}
                  color="#8a8a8a"
                  label="Undecided"
                  rightLabel={`${UNDECIDED_PCT}%`}
                  className="flex-1"
                />
              </div>
            </div>
            <div className="mt-3 text-xs text-ink-faint font-data">
              Estimates · Apr 2026 polling reporting · should be replaced with
              sourced averages
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-3">
          <div className="eyebrow">Money in the bank</div>
          <h2 className="font-display font-black text-2xl md:text-3xl leading-tight tracking-tight">
            Steyer is self-funding past everyone else.
          </h2>
          <p className="text-ink-muted leading-relaxed">
            Tom Steyer&apos;s billionaire wallet has poured tens of millions into
            broadcast TV, dwarfing every other candidate&apos;s traditional
            fundraising — and putting Hilton&apos;s Trump-backed war chest in second
            place.
          </p>

          <div className="mt-4 rounded-sm border border-rule-soft bg-paper p-5">
            <div className="eyebrow mb-3">Cumulative fundraising · $M</div>
            <div className="space-y-2">
              {[...CANDIDATES]
                .sort((a, b) => b.fundraisingMillions - a.fundraisingMillions)
                .map((c) => (
                  <div key={c.slug} className="flex items-center gap-2">
                    <CandidateAvatar
                      name={c.fullName}
                      color={c.color}
                      imageUrl={c.imageUrl}
                      size={22}
                      rounded="circle"
                    />
                    <HBar
                      value={c.fundraisingMillions}
                      max={maxFunds}
                      color={c.color}
                      label={c.lastName}
                      rightLabel={`$${c.fundraisingMillions.toFixed(1)}M`}
                      className="flex-1"
                    />
                  </div>
                ))}
            </div>
            <div className="mt-3 text-xs text-ink-faint font-data">
              Estimates · replace with Cal-Access filings
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING CHART */}
      <section className="mt-20 border-t-2 border-ink pt-8">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="eyebrow mb-2">Where they sit</div>
            <h2 className="font-display font-black text-3xl md:text-4xl leading-tight tracking-tight">
              The eight candidates, on two axes.
            </h2>
            <p className="mt-4 text-ink-muted leading-relaxed">
              The horizontal axis runs from progressive (left) to conservative
              (right). The vertical axis runs from outsider (bottom) to
              establishment (top). Placement is editorial, based on each
              candidate&apos;s stated platform, prior office, and donor base.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <Quadrant
                label="Top-left · Establishment progressives"
                names="Becerra, Thurmond"
              />
              <Quadrant
                label="Bottom-left · Outsider progressives"
                names="Porter, Steyer, Mahan"
              />
              <Quadrant
                label="Top-right · Establishment conservatives"
                names="Villaraigosa (centrist Dem in this frame)"
              />
              <Quadrant
                label="Bottom-right · Outsider conservatives"
                names="Hilton, Bianco"
              />
            </div>
          </div>
          <div className="lg:col-span-3 order-1 lg:order-2 flex justify-center">
            <PositioningChart size={460} dotSize={48} />
          </div>
        </div>
      </section>

      {/* DEMOCRATIC FIELD */}
      <PartySection party="Democratic" candidates={DEMS} />

      {/* REPUBLICAN FIELD */}
      <PartySection party="Republican" candidates={REPS} />

      {/* METHODOLOGY */}
      <section className="mt-24 border-t-[3px] border-ink pt-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="eyebrow mb-2">How we built this</div>
            <p className="text-sm text-ink-muted leading-relaxed">
              Each candidate&apos;s record was distilled into the same eight issue
              questions, scored on a five-step stance scale from{" "}
              <em>strongly opposes</em> to <em>strongly supports</em>. Scores
              come from voting records, official campaign positions, and
              on-the-record statements.
            </p>
          </div>
          <div>
            <div className="eyebrow mb-2">Photos</div>
            <p className="text-sm text-ink-muted leading-relaxed">
              Candidate portraits are sourced from Wikimedia Commons. Each
              candidate&apos;s profile page lists the original photographer and
              license credit.
            </p>
          </div>
          <div>
            <div className="eyebrow mb-2">Get the ballot</div>
            <p className="text-sm text-ink-muted leading-relaxed">
              California&apos;s primary is{" "}
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

function PartySection({
  party,
  candidates,
}: {
  party: Party;
  candidates: Candidate[];
}) {
  const sorted = [...candidates].sort((a, b) => b.pollAverage - a.pollAverage);
  const partyColor = party === "Democratic" ? "#1d4ed8" : "#b91c1c";

  return (
    <section className="mt-20">
      <div
        className="border-b-[3px] pb-3 mb-6 flex items-baseline justify-between"
        style={{ borderColor: partyColor }}
      >
        <div>
          <div
            className="eyebrow"
            style={{ color: partyColor }}
          >
            The {party.toLowerCase()} field
          </div>
          <h2 className="font-display font-black text-3xl md:text-5xl leading-tight tracking-tight">
            {candidates.length} {party === "Democratic" ? "Democrats" : "Republicans"} on
            the ballot.
          </h2>
        </div>
        <Link
          href="/compare"
          className="text-sm font-medium hover:underline shrink-0 ml-4"
          style={{ color: partyColor }}
        >
          Compare on issues →
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
        {sorted.map((c) => {
          const sigPos = c.positions[c.signatureIssue];
          const sigLabel = ISSUES.find((i) => i.key === c.signatureIssue)
            ?.label;
          return (
            <Link
              key={c.slug}
              href={`/candidate/${c.slug}`}
              className="group block hover:bg-paper-deep -mx-2 px-2 transition-colors"
            >
              <div className="flex items-start gap-4">
                <CandidateAvatar
                  name={c.fullName}
                  color={c.color}
                  imageUrl={c.imageUrl}
                  size={96}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display font-black text-2xl tracking-tight leading-none truncate">
                      {c.fullName}
                    </h3>
                    <div
                      className="font-data text-sm tabnum shrink-0 font-bold"
                      style={{ color: c.color }}
                    >
                      {c.pollAverage}%
                    </div>
                  </div>
                  <div className="mt-1 text-sm text-ink-muted">
                    {c.currentRole}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-ink-faint font-data uppercase tracking-wider">
                    <span>{c.lane}</span>
                    <span>·</span>
                    <span>{c.region}</span>
                    <span>·</span>
                    <span>${c.fundraisingMillions.toFixed(1)}M raised</span>
                  </div>
                  <p className="mt-3 text-[14px] text-ink leading-relaxed">
                    {c.pitch}
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-sm bg-paper-deep/60 border border-rule-soft p-3">
                <div className="eyebrow mb-2 text-[10px]">
                  Signature issue · {sigLabel}
                </div>
                <StanceCell
                  stance={sigPos.stance}
                  headline={sigPos.headline}
                  compact
                />
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {ISSUES.map((i) => {
                    const s = c.positions[i.key];
                    const colors: Record<string, string> = {
                      "strong-for": "var(--green)",
                      for: "#5fa982",
                      mixed: "var(--gold)",
                      against: "#e08566",
                      "strong-against": "var(--accent-deep)",
                      unclear: "#cccccc",
                    };
                    return (
                      <div
                        key={i.key}
                        title={`${i.label}: ${s.headline}`}
                        className="w-3.5 h-3.5"
                        style={{
                          background: colors[s.stance],
                          borderRadius: 1,
                        }}
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
  );
}

function Quadrant({ label, names }: { label: string; names: string }) {
  return (
    <div className="border-l-2 border-rule-soft pl-3">
      <div className="eyebrow text-[10px]">{label}</div>
      <div className="text-sm">{names}</div>
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
