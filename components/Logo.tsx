/** ELAH's wordmark, as Monitor, X-ray and APACT show it: the on-light file in the light theme, on-dark in dark. */
const RATIO = 933 / 282;

const HEIGHT = {
  sm: 22,
  md: 30,
  lg: 40,
} as const;

export default function Logo({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: keyof typeof HEIGHT;
}) {
  const height = HEIGHT[size];
  const width = Math.round(height * RATIO);

  return (
    <span className={`inline-flex ${className}`} style={{ height }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="logo-light block" src="/brand/elah-wordmark-on-light.svg" alt="ELAH" width={width} height={height} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="logo-dark block" src="/brand/elah-wordmark-on-dark.svg" alt="ELAH" width={width} height={height} />
    </span>
  );
}
