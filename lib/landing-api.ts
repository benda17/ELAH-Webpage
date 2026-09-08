/** Browser always posts to this site. The server forwards to the founder API. */
export function landingApiUrl(envValue: string | undefined, path: string): string {
  if (typeof window === "undefined") return path;
  const host = window.location.hostname;
  if (host === "localhost" || host === "127.0.0.1") {
    const fromEnv = envValue?.trim();
    if (fromEnv) return fromEnv;
  }
  return path;
}
