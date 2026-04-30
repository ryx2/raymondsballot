import CandidateAvatar from "@/components/CandidateAvatar";
import { StateGuideCandidate } from "@/data/stateGuides";

const PARTY_COLORS: Record<StateGuideCandidate["party"], string> = {
  Democratic: "#1d4ed8",
  Republican: "#b91c1c",
  Independent: "#5f5a4c",
  Libertarian: "#d4a017",
  Green: "#1d4f3f",
  Other: "#8a8a8a",
};

export default function StateGuideCandidateCard({
  candidate,
}: {
  candidate: StateGuideCandidate;
}) {
  const color = PARTY_COLORS[candidate.party];

  return (
    <article className="border-t-2 border-ink pt-4">
      <div className="flex items-start gap-4">
        <CandidateAvatar
          name={candidate.name}
          color={color}
          imageUrl={candidate.imageUrl}
          size={72}
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-2xl font-black leading-none tracking-tight">
              {candidate.name}
            </h3>
            <span
              className="shrink-0 px-1.5 py-0.5 font-data text-[10px] font-bold uppercase tracking-wider text-paper"
              style={{ background: color, borderRadius: 2 }}
            >
              {candidate.party.slice(0, 3)}
            </span>
          </div>
          <div className="mt-1 text-sm text-ink-muted">
            {candidate.currentRole}
          </div>
          <div className="mt-2 font-data text-[11px] uppercase tracking-wider text-ink-faint">
            {candidate.status}
            {candidate.isIncumbent ? " / incumbent" : ""}
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-ink-muted">
        {candidate.summary}
      </p>

      <div className="mt-4 flex flex-wrap gap-3 text-xs">
        {candidate.websiteUrl && (
          <a
            href={candidate.websiteUrl}
            className="font-medium text-accent hover:underline"
          >
            Campaign site
          </a>
        )}
        {candidate.sourceUrls[0] && (
          <a
            href={candidate.sourceUrls[0]}
            className="font-medium text-ink hover:text-accent"
          >
            Source
          </a>
        )}
      </div>
      {candidate.imageAttribution && (
        <div className="mt-2 font-data text-[10px] leading-snug text-ink-faint">
          Image: {candidate.imageAttribution}
        </div>
      )}
    </article>
  );
}
