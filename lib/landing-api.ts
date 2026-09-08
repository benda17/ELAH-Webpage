const LOCAL_DASHBOARD = "http://localhost:3001";
const PRODUCTION_DASHBOARD = "https://elahfounderplatform.vercel.app";

export function landingApiUrl(envValue: string | undefined, path: string): string {
  const fromEnv = envValue?.trim();
  if (fromEnv) return fromEnv;
  if (typeof window === "undefined") return `${LOCAL_DASHBOARD}${path}`;
  const host = window.location.hostname;
  const base =
    host === "localhost" || host === "127.0.0.1"
      ? LOCAL_DASHBOARD
      : PRODUCTION_DASHBOARD;
  return `${base}${path}`;
}
