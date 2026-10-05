import Image from "next/image";

/** Opaque wordmark inside the square logo file. */
const BAND = { x: 76, y: 200, w: 348, h: 104, canvas: 500 } as const;

const HEIGHT = {
  sm: 26,
  md: 34,
  lg: 44,
} as const;

export default function Logo({
  className = "",
  size = "md",
  tone = "light",
}: {
  className?: string;
  size?: keyof typeof HEIGHT;
  tone?: "light" | "ink";
}) {
  const height = HEIGHT[size];
  const scale = height / BAND.h;
  const width = Math.round(BAND.w * scale);

  return (
    <span
      className={`relative inline-block overflow-hidden ${className}`}
      style={{ width, height }}
    >
      <Image
        src={tone === "ink" ? "/logo-ink.png" : "/logo.png"}
        alt="ELAH"
        width={BAND.canvas}
        height={BAND.canvas}
        priority
        className="absolute max-w-none"
        style={{
          width: BAND.canvas * scale,
          height: BAND.canvas * scale,
          left: -BAND.x * scale,
          top: -BAND.y * scale,
        }}
      />
    </span>
  );
}
