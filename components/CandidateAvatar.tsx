interface Props {
  name: string;
  color: string;
  size?: number;
  className?: string;
}

export default function CandidateAvatar({
  name,
  color,
  size = 56,
  className = "",
}: Props) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className={`initials flex items-center justify-center text-paper shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        fontSize: size * 0.4,
        borderRadius: 2,
      }}
      aria-hidden
    >
      {initials}
    </div>
  );
}
