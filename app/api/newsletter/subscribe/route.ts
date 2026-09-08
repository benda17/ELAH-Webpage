import { proxyFounderPost } from "@/lib/founder-proxy";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  return proxyFounderPost("/api/newsletter/subscribe", request);
}
