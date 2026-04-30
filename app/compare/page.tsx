import Link from "next/link";
import {
  CANDIDATES,
  DEMS,
  REPS,
  ISSUES,
  Stance,
  stanceLabel,
  stanceShade,
} from "@/data/candidates";
import CandidateAvatar from "@/components/CandidateAvatar";

const STANCE_ORDER: Stance[] = [
  "strong-for",
  "for",
  "mixed",
  "against",
  "strong-against",
  "unclear",
];

function consensusScore(stances: Stance[]): number {
  const counts: Record<string, number> = {};
  for (const s of stances) counts[s] = (counts[s] ?? 0) + 1;
  const max = Math.max(...Object.values(counts));
  return max / stances.length;
}

export default function ComparePage() {
  // Pre-compute per-issue consensus across full field
  const issueAnalysis = ISSUES.map((i) => {
    const stances = CANDIDATES.map((c) => c.positions[i.key].stance);
    const counts: Record<string, number> = {};
    for (const s of stances) counts[s] = (counts[s] ?? 0) + 1;
    return {
      ...i,
      stances,
      counts,
      consensus: consensusScore(stances),
    };
  });

  const mostAgreed = [...issueAnalysis].sort(
    (a, b) => b.consensus - a.consensus
  )[0];
  const mostDivided = [...issueAnalysis].sort(
    (a, b) => a.consensus - b.consensus
  )[0];

  // Order: Dems by poll, then Reps by poll
  const orderedCandidates = [
    ...[...DEMS].sort((a, b) => b.pollAverage - a.pollAverage),
    ...[...REPS].sort((a, b) => b.pollAverage - a.pollAverage),
  ];

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-10">
      <header className="border-b-2 border-ink pb-6">
        <div className="eyebrow mb-2">Side-by-side</div>
        <h1 className="font-display font-black text-4xl md:text-6xl leading-[1.02] tracking-tight max-w-4xl">
          The whole field on one page.
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-ink-muted leading-relaxed">
          Eight issues. {CANDIDATES.length} candidates. {CANDIDATES.length * 8}{" "}
          positions. Read across a row to see where the field converges or
          splits, or scan a column to see a single candidate&apos;s overall lane.
        </p>
      </header>

      {/* HEADLINE ANALYSIS */}
      <section className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="border-l-4 border-green pl-5">
          <div className="eyebrow text-green mb-1">Most agreement</div>
          <div className="font-display font-black text-2xl tracking-tight">
            {mostAgreed.label}
          </div>
          <p className="mt-2 text-sm text-ink-muted">
            {Math.round(mostAgreed.consensus * 100)}% of the field shares the
            same stance.
          </p>
        </div>
        <div className="border-l-4 border-accent pl-5">
          <div className="eyebrow text-accent mb-1">Sharpest split</div>
          <div className="font-display font-black text-2xl tracking-tight">
            {mostDivided.label}
          </div>
          <p className="mt-2 text-sm text-ink-muted">
            The widest spread of stances. Voters who care about this issue have
            the most to choose between.
          </p>
        </div>
      </section>

      {/* MATRIX */}
      <section className="mt-12">
        <div className="border-b-2 border-ink pb-3 mb-6">
          <div className="eyebrow">The matrix</div>
          <h2 className="font-display font-black text-3xl tracking-tight">
            Stances on the eight key issues
          </h2>
        </div>

        <div className="overflow-x-auto -mx-6 px-6">
          <table className="editorial min-w-[1100px]">
            <thead>
              <tr>
                <th className="w-44">Issue</th>
                {orderedCandidates.map((c) => (
                  <th
                    key={c.slug}
                    className="text-left"
                    style={{
                      borderTop: `3px solid ${
                        c.party === "Democratic" ? "#1d4ed8" : "#b91c1c"
                      }`,
                    }}
                  >
                    <Link
                      href={`/candidate/${c.slug}`}
                      className="flex items-center gap-2 hover:text-accent"
                    >
                      <CandidateAvatar
                        name={c.fullName}
                        color={c.color}
                        imageUrl={c.imageUrl}
                        size={36}
                        rounded="circle"
                      />
                      <div className="min-w-0">
                        <div className="font-display font-bold text-[13px] tracking-tight">
                          {c.lastName}
                        </div>
                        <div
                          className="font-data text-[10px] tabnum"
                          style={{
                            color:
                              c.party === "Democratic" ? "#1d4ed8" : "#b91c1c",
                          }}
                        >
                          {c.party === "Democratic" ? "DEM" : "REP"} ·{" "}
                          {c.pollAverage}%
                        </div>
                      </div>
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ISSUES.map((i) => (
                <tr key={i.key} className="row-hover">
                  <td className="font-display font-bold text-[15px] tracking-tight align-top w-44">
                    <span
                      aria-hidden
                      className="inline-block w-5 mr-1 text-center"
                    >
                      {i.icon}
                    </span>
                    {i.label}
                  </td>
                  {orderedCandidates.map((c) => {
                    const pos = c.positions[i.key];
                    const shade = stanceShade(pos.stance);
                    return (
                      <td key={c.slug} className="align-top min-w-[140px]">
                        <div className="space-y-1.5">
                          <span
                            className="inline-block font-data text-[10px] tracking-wider uppercase font-bold px-1.5 py-0.5"
                            style={{
                              background: shade.bg,
                              color: shade.fg,
                              borderRadius: 2,
                            }}
                          >
                            {stanceLabel(pos.stance)}
                          </span>
                          <div className="text-[13px] leading-snug">
                            {pos.headline}
                          </div>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3 text-xs text-ink-faint font-data">
          Blue rule = Democrat · Red rule = Republican. Tap a candidate&apos;s
          name/photo for a full profile.
        </div>
      </section>

      {/* PARTY BREAKDOWNS */}
      <section className="mt-20 grid lg:grid-cols-2 gap-10">
        <PartyBreakdown party="Democratic" />
        <PartyBreakdown party="Republican" />
      </section>

      {/* ISSUE BREAKDOWN: HOW THE FIELD VOTES */}
      <section className="mt-20">
        <div className="border-b-2 border-ink pb-3 mb-6">
          <div className="eyebrow">Stance distribution</div>
          <h2 className="font-display font-black text-3xl tracking-tight">
            How the field splits, issue by issue
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
          {issueAnalysis.map((i) => (
            <div key={i.key} className="border-t-2 border-ink pt-4">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display font-bold text-xl tracking-tight">
                  <span aria-hidden className="mr-1.5">
                    {i.icon}
                  </span>
                  {i.label}
                </h3>
                <div className="font-data text-xs text-ink-muted tabnum">
                  {Math.round(i.consensus * 100)}% agreement
                </div>
              </div>

              <div className="mt-3 flex h-3 w-full overflow-hidden rounded-sm border border-rule-soft">
                {STANCE_ORDER.map((s) => {
                  const count = i.counts[s] ?? 0;
                  if (count === 0) return null;
                  const shade = stanceShade(s);
                  return (
                    <div
                      key={s}
                      title={`${stanceLabel(s)}: ${count}`}
                      style={{ background: shade.bg, flex: count }}
                    />
                  );
                })}
              </div>

              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs">
                {STANCE_ORDER.map((s) => {
                  const count = i.counts[s] ?? 0;
                  if (count === 0) return null;
                  const shade = stanceShade(s);
                  return (
                    <div key={s} className="flex items-center gap-1.5">
                      <span
                        className="inline-block w-2.5 h-2.5"
                        style={{ background: shade.bg, borderRadius: 1 }}
                      />
                      <span className="text-ink-muted">{stanceLabel(s)}</span>
                      <span className="font-data tabnum text-ink">{count}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CANDIDATE PILLS */}
      <section className="mt-20 border-t-[3px] border-ink pt-6">
        <div className="eyebrow mb-4">Open a candidate profile</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {orderedCandidates.map((c) => (
            <Link
              key={c.slug}
              href={`/candidate/${c.slug}`}
              className="flex items-center gap-3 border border-rule-soft p-3 hover:bg-paper-deep transition-colors"
              style={{
                borderLeft: `4px solid ${
                  c.party === "Democratic" ? "#1d4ed8" : "#b91c1c"
                }`,
              }}
            >
              <CandidateAvatar
                name={c.fullName}
                color={c.color}
                imageUrl={c.imageUrl}
                size={42}
                rounded="circle"
              />
              <div className="min-w-0">
                <div className="font-display font-bold text-sm truncate">
                  {c.fullName}
                </div>
                <div className="text-[11px] text-ink-muted truncate">
                  {c.lane} · {c.pollAverage}%
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function PartyBreakdown({ party }: { party: "Democratic" | "Republican" }) {
  const candidates = party === "Democratic" ? DEMS : REPS;
  const accent = party === "Democratic" ? "#1d4ed8" : "#b91c1c";
  const issueAnalysis = ISSUES.map((i) => {
    const stances = candidates.map((c) => c.positions[i.key].stance);
    const counts: Record<string, number> = {};
    for (const s of stances) counts[s] = (counts[s] ?? 0) + 1;
    return { ...i, counts, consensus: consensusScore(stances) };
  });

  return (
    <div>
      <div
        className="border-b-2 pb-3 mb-4"
        style={{ borderColor: accent }}
      >
        <div className="eyebrow" style={{ color: accent }}>
          {party} field
        </div>
        <h2 className="font-display font-black text-2xl tracking-tight">
          {candidates.length}{" "}
          {party === "Democratic" ? "Democrats" : "Republicans"} · how they
          agree
        </h2>
      </div>
      <div className="space-y-3">
        {issueAnalysis.map((i) => (
          <div key={i.key} className="flex items-center gap-3">
            <div className="w-32 shrink-0 text-sm font-medium truncate">
              {i.icon} {i.label}
            </div>
            <div className="flex-1 flex h-2.5 overflow-hidden rounded-sm border border-rule-soft">
              {STANCE_ORDER.map((s) => {
                const count = i.counts[s] ?? 0;
                if (count === 0) return null;
                const shade = stanceShade(s);
                return (
                  <div
                    key={s}
                    style={{ background: shade.bg, flex: count }}
                  />
                );
              })}
            </div>
            <div className="w-12 shrink-0 text-right font-data text-xs tabnum">
              {Math.round(i.consensus * 100)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
