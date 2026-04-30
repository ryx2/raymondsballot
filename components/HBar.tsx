interface Props {
  value: number;
  max: number;
  color: string;
  label?: string;
  rightLabel?: string;
  height?: number;
  className?: string;
}

export default function HBar({
  value,
  max,
  color,
  label,
  rightLabel,
  height = 18,
  className = "",
}: Props) {
  const pct = max > 0 ? Math.min(100, (value / max) * 100) : 0;
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {label && (
        <div className="w-32 shrink-0 text-sm font-medium truncate">
          {label}
        </div>
      )}
      <div
        className="flex-1 relative bg-rule-soft"
        style={{ height, borderRadius: 1 }}
      >
        <div
          className="absolute inset-y-0 left-0"
          style={{ width: `${pct}%`, background: color, borderRadius: 1 }}
        />
      </div>
      {rightLabel && (
        <div className="w-14 shrink-0 text-right font-data text-sm tabnum">
          {rightLabel}
        </div>
      )}
    </div>
  );
}
