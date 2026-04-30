import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CANDIDATES,
  ISSUES,
  getCandidate,
  stanceLabel,
  stanceShade,
} from "@/data/candidates";
import CandidateAvatar from "@/components/CandidateAvatar";
import HBar from "@/components/HBar";
import StanceCell from "@/components/StanceCell";

export function generateStaticParams() {
  return CANDIDATES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  props: PageProps<"/candidate/[slug]">
) {
  const { slug } = await props.params;
  const c = getCandidate(slug);
  if (!c) return { title: "Candidate not found" };
  return {
    title: `${c.fullName} — California Governor 2026`,
    description: c.pitch,
  };
}

export default async function CandidatePage(
  props: PageProps<"/candidate/[slug]">
) {
  const { slug } = await props.params;
  const c = getCandidate(slug);
  if (!c) notFound();

  const others = CANDIDATES.filter((x) => x.slug !== c.slug);
  const maxPoll = Math.max(...CANDIDATES.map((x) => x.pollAverage));
  const maxFunds = Math.max(...CANDIDATES.map((x) => x.fundraisingMillions));
  const sigLabel = ISSUES.find((i) => i.key === c.signatureIssue)?.label;

  return (
    <article className="mx-auto w-full max-w-6xl px-6 py-10">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm font-data text-ink-muted">
        <Link href="/" className="hover:text-accent">
          ← All candidates
        </Link>
      </div>

      {/* HERO */}
      <header
        className="border-y-[3px] border-ink py-8 grid md:grid-cols-[auto_1fr_auto] items-start gap-6 md:gap-10"
        style={{
          backgroundImage: `linear-gradient(to right, ${c.color}10, transparent 40%)`,
        }}
      >
        <CandidateAvatar name={c.fullName} color={c.color} size={140} />
        <div className="min-w-0">
          <div className="eyebrow mb-2">
            {c.lane} · {c.region}
          </div>
          <h1 className="font-display font-black text-5xl md:text-6xl leading-[0.98] tracking-tight">
            {c.fullName}
          </h1>
          <div className="mt-3 text-lg text-ink-muted">{c.currentRole}</div>
          <p className="mt-5 text-xl leading-snug max-w-2xl">{c.oneLine}</p>
          <a
            href={c.websiteUrl}
            className="inline-flex mt-5 items-center gap-2 text-sm font-medium border border-ink px-3 py-1.5 hover:bg-ink hover:text-paper transition-colors"
            style={{ borderRadius: 2 }}
          >
            Official campaign site ↗
          </a>
        </div>

        <div className="md:w-56 space-y-4 md:border-l-2 md:border-rule-soft md:pl-6">
          <DatumRow label="Born" value={c.born.toString()} />
          <DatumRow label="Hometown" value={c.hometown} />
          <DatumRow
            label="Polling avg"
            value={`${c.pollAverage}%`}
            highlight={c.color}
          />
          <DatumRow
            label="Raised"
            value={`$${c.fundraisingMillions.toFixed(1)}M`}
          />
          <DatumRow label="Signature issue" value={sigLabel ?? ""} />
        </div>
      </header>

      {/* BIO + STRENGTHS */}
      <section className="mt-12 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-4">
          <div className="eyebrow">The case for {c.lastName}</div>
          <h2 className="font-display font-black text-3xl md:text-4xl leading-tight tracking-tight">
            {c.pitch}
          </h2>
          <p className="text-lg text-ink-muted leading-relaxed">{c.bio}</p>

          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            <div className="rounded-sm border border-rule-soft bg-paper p-4">
              <div className="eyebrow mb-2 text-green">Strengths</div>
              <ul className="space-y-2 text-sm">
                {c.strengths.map((s) => (
                  <li key={s} className="flex gap-2">
                    <span className="text-green font-bold">+</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-sm border border-rule-soft bg-paper p-4">
              <div className="eyebrow mb-2 text-accent">Challenges</div>
              <ul className="space-y-2 text-sm">
                {c.challenges.map((s) => (
                  <li key={s} className="flex gap-2">
                    <span className="text-accent font-bold">−</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div>
            <div className="eyebrow mb-3">Top accomplishment</div>
            <p className="text-sm leading-relaxed">{c.topAccomplishment}</p>
          </div>
          <div>
            <div className="eyebrow mb-3">Base of support</div>
            <p className="text-sm leading-relaxed">{c.baseConstituency}</p>
          </div>
          <div>
            <div className="eyebrow mb-3">Notable endorsements</div>
            <ul className="space-y-2 text-sm">
              {c.notableEndorsements.map((e) => (
                <li key={e} className="border-l-2 border-rule-soft pl-2">
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-3">Past roles</div>
            <ul className="space-y-1 text-sm font-data">
              {c.pastRoles.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      {/* ISSUE BREAKDOWN */}
      <section className="mt-20">
        <div className="border-b-2 border-ink pb-3 mb-6">
          <div className="eyebrow">Issue-by-issue</div>
          <h2 className="font-display font-black text-3xl md:text-4xl leading-tight tracking-tight">
            Where {c.lastName} stands on the eight issues
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
          {ISSUES.map((i) => {
            const pos = c.positions[i.key];
            const shade = stanceShade(pos.stance);
            return (
              <div
                key={i.key}
                className="border-t-2 border-ink pt-4"
                id={i.key}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display font-bold text-xl tracking-tight">
                    {i.label}
                  </h3>
                  <span
                    className="font-data text-[10px] tracking-wider uppercase font-bold px-1.5 py-0.5 shrink-0"
                    style={{
                      background: shade.bg,
                      color: shade.fg,
                      borderRadius: 2,
                    }}
                  >
                    {stanceLabel(pos.stance)}
                  </span>
                </div>
                <div className="mt-3 font-medium leading-snug">
                  {pos.headline}
                </div>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                  {pos.detail}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* COMPARE TO RIVALS */}
      <section className="mt-20 border-t-[3px] border-ink pt-6">
        <div className="flex items-baseline justify-between mb-4">
          <div>
            <div className="eyebrow">In context</div>
            <h2 className="font-display font-black text-2xl md:text-3xl tracking-tight">
              How {c.lastName} stacks up
            </h2>
          </div>
          <Link
            href="/compare"
            className="text-sm font-medium text-accent hover:underline"
          >
            Full comparison →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-sm border border-rule-soft p-5 bg-paper">
            <div className="eyebrow mb-3">Polling</div>
            <div className="space-y-1.5">
              {[c, ...others]
                .sort((a, b) => b.pollAverage - a.pollAverage)
                .map((cc) => (
                  <HBar
                    key={cc.slug}
                    value={cc.pollAverage}
                    max={maxPoll}
                    color={cc.slug === c.slug ? c.color : "#bdb9ad"}
                    label={cc.lastName}
                    rightLabel={`${cc.pollAverage}%`}
                  />
                ))}
            </div>
          </div>
          <div className="rounded-sm border border-rule-soft p-5 bg-paper">
            <div className="eyebrow mb-3">Fundraising</div>
            <div className="space-y-1.5">
              {[c, ...others]
                .sort((a, b) => b.fundraisingMillions - a.fundraisingMillions)
                .map((cc) => (
                  <HBar
                    key={cc.slug}
                    value={cc.fundraisingMillions}
                    max={maxFunds}
                    color={cc.slug === c.slug ? c.color : "#bdb9ad"}
                    label={cc.lastName}
                    rightLabel={`$${cc.fundraisingMillions.toFixed(1)}M`}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* OTHER CANDIDATES */}
      <section className="mt-20 border-t-[3px] border-ink pt-6">
        <div className="eyebrow mb-4">Other candidates in the field</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/candidate/${o.slug}`}
              className="flex items-center gap-3 border border-rule-soft p-3 hover:bg-paper-deep transition-colors"
            >
              <CandidateAvatar name={o.fullName} color={o.color} size={36} />
              <div className="min-w-0">
                <div className="font-display font-bold text-sm truncate">
                  {o.fullName}
                </div>
                <div className="text-xs text-ink-muted truncate">
                  {o.lane} · {o.pollAverage}%
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}

function DatumRow({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: string;
}) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <div className="eyebrow text-[10px]">{label}</div>
      <div
        className="font-data text-sm tabnum text-right"
        style={highlight ? { color: highlight, fontWeight: 700 } : undefined}
      >
        {value}
      </div>
    </div>
  );
}
