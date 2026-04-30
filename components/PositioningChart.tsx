import Link from "next/link";
import { CANDIDATES } from "@/data/candidates";
import CandidateAvatar from "./CandidateAvatar";

interface Props {
  size?: number;
  dotSize?: number;
}

export default function PositioningChart({ size = 420, dotSize = 36 }: Props) {
  const padding = 36;
  const chartW = size - padding * 2;

  const toX = (n: number) => padding + ((n + 1) / 2) * chartW;
  // Y inverted: +1 at top of axis becomes top of chart
  const toY = (n: number) => padding + ((1 - n) / 2) * chartW;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        className="absolute inset-0"
        aria-hidden
      >
        {/* Background quadrants — very subtle tint */}
        <rect
          x={padding}
          y={padding}
          width={chartW / 2}
          height={chartW / 2}
          fill="rgba(29,78,216,0.04)"
        />
        <rect
          x={padding + chartW / 2}
          y={padding}
          width={chartW / 2}
          height={chartW / 2}
          fill="rgba(185,28,28,0.04)"
        />
        <rect
          x={padding}
          y={padding + chartW / 2}
          width={chartW / 2}
          height={chartW / 2}
          fill="rgba(29,78,216,0.04)"
        />
        <rect
          x={padding + chartW / 2}
          y={padding + chartW / 2}
          width={chartW / 2}
          height={chartW / 2}
          fill="rgba(185,28,28,0.04)"
        />

        {/* Frame */}
        <rect
          x={padding}
          y={padding}
          width={chartW}
          height={chartW}
          fill="none"
          stroke="var(--ink)"
          strokeWidth={1.5}
        />

        {/* Cross axes */}
        <line
          x1={padding}
          x2={size - padding}
          y1={padding + chartW / 2}
          y2={padding + chartW / 2}
          stroke="var(--ink)"
          strokeWidth={1}
          strokeDasharray="3 3"
        />
        <line
          y1={padding}
          y2={size - padding}
          x1={padding + chartW / 2}
          x2={padding + chartW / 2}
          stroke="var(--ink)"
          strokeWidth={1}
          strokeDasharray="3 3"
        />

        {/* Axis labels */}
        <text
          x={padding + 4}
          y={padding + chartW / 2 - 6}
          fontFamily="var(--font-archivo), sans-serif"
          fontSize={10}
          fontWeight={700}
          fill="var(--ink-muted)"
          letterSpacing="0.08em"
        >
          ← PROGRESSIVE
        </text>
        <text
          x={size - padding - 4}
          y={padding + chartW / 2 - 6}
          fontFamily="var(--font-archivo), sans-serif"
          fontSize={10}
          fontWeight={700}
          fill="var(--ink-muted)"
          letterSpacing="0.08em"
          textAnchor="end"
        >
          CONSERVATIVE →
        </text>
        <text
          x={padding + chartW / 2 + 6}
          y={padding + 12}
          fontFamily="var(--font-archivo), sans-serif"
          fontSize={10}
          fontWeight={700}
          fill="var(--ink-muted)"
          letterSpacing="0.08em"
        >
          ↑ ESTABLISHMENT
        </text>
        <text
          x={padding + chartW / 2 + 6}
          y={size - padding - 4}
          fontFamily="var(--font-archivo), sans-serif"
          fontSize={10}
          fontWeight={700}
          fill="var(--ink-muted)"
          letterSpacing="0.08em"
        >
          ↓ OUTSIDER
        </text>
      </svg>

      {/* Candidate dots */}
      {CANDIDATES.map((c) => {
        const x = toX(c.positionX);
        const y = toY(c.positionY);
        // Nudge labels to avoid overlap: place label below for top half, above for bottom
        const labelBelow = c.positionY > 0;
        return (
          <Link
            key={c.slug}
            href={`/candidate/${c.slug}`}
            className="absolute group"
            style={{
              left: x - dotSize / 2,
              top: y - dotSize / 2,
              width: dotSize,
              height: dotSize,
            }}
            aria-label={c.fullName}
          >
            <CandidateAvatar
              name={c.fullName}
              color={c.color}
              imageUrl={c.imageUrl}
              size={dotSize}
              rounded="circle"
              className="transition-transform group-hover:scale-110"
            />
            <span
              className="absolute font-display font-bold text-[11px] tracking-tight whitespace-nowrap pointer-events-none"
              style={{
                top: labelBelow ? dotSize + 2 : -14,
                left: "50%",
                transform: "translateX(-50%)",
                color: c.color,
              }}
            >
              {c.lastName}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
