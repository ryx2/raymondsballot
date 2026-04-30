import Image from "next/image";

interface Props {
  name: string;
  color: string;
  imageUrl?: string | null;
  size?: number;
  className?: string;
  rounded?: "square" | "circle";
}

export default function CandidateAvatar({
  name,
  color,
  imageUrl,
  size = 56,
  className = "",
  rounded = "square",
}: Props) {
  const radius = rounded === "circle" ? size / 2 : 2;

  if (imageUrl) {
    return (
      <div
        className={`relative shrink-0 overflow-hidden ${className}`}
        style={{
          width: size,
          height: size,
          background: color,
          borderRadius: radius,
          boxShadow: `inset 0 0 0 2px ${color}`,
        }}
      >
        <Image
          src={imageUrl}
          alt={name}
          width={Math.min(640, size * 2)}
          height={Math.min(640, size * 2)}
          className="w-full h-full object-cover"
          sizes={`${size * 2}px`}
          priority={size >= 100}
        />
      </div>
    );
  }

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
        borderRadius: radius,
      }}
      aria-hidden
    >
      {initials}
    </div>
  );
}
