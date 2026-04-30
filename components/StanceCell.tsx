import { Stance, stanceLabel, stanceShade } from "@/data/candidates";

interface Props {
  stance: Stance;
  headline?: string;
  detail?: string;
  compact?: boolean;
}

export default function StanceCell({
  stance,
  headline,
  detail,
  compact = false,
}: Props) {
  const shade = stanceShade(stance);
  return (
    <div className={compact ? "" : "space-y-2"}>
      <div className="flex items-center gap-2">
        <span
          className="font-data text-[10px] tracking-wider uppercase font-bold px-1.5 py-0.5"
          style={{ background: shade.bg, color: shade.fg, borderRadius: 2 }}
        >
          {stanceLabel(stance)}
        </span>
        <div className="stance-bar grow max-w-[64px]">
          <span
            style={{
              background: shade.bg,
              width: `${(shade.bar / 5) * 100}%`,
            }}
          />
        </div>
      </div>
      {headline && (
        <div className="font-medium text-ink leading-snug">{headline}</div>
      )}
      {!compact && detail && (
        <div className="text-sm text-ink-muted leading-relaxed">{detail}</div>
      )}
    </div>
  );
}
