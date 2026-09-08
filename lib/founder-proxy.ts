const PRODUCTION_FOUNDER = "https://elahfounderplatform.vercel.app";

export function founderApiOrigin(): string {
  const explicit = process.env.FOUNDER_API_ORIGIN?.trim();
  if (explicit) return explicit.replace(/\/$/, "");
  if (process.env.VERCEL) return PRODUCTION_FOUNDER;
  return "http://localhost:3001";
}

export async function proxyFounderPost(
  path: string,
  request: Request,
): Promise<Response> {
  let body: string;
  try {
    body = await request.text();
    JSON.parse(body);
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const url = `${founderApiOrigin()}${path}`;
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  const bypass = process.env.FOUNDER_PROTECTION_BYPASS?.trim();
  if (bypass) {
    headers["x-vercel-protection-bypass"] = bypass;
  }

  try {
    const upstream = await fetch(url, {
      method: "POST",
      headers,
      body,
      cache: "no-store",
    });
    const text = await upstream.text();
    return new Response(text, {
      status: upstream.status,
      headers: {
        "Content-Type": upstream.headers.get("content-type") || "application/json",
      },
    });
  } catch {
    return Response.json(
      { ok: false, error: "Could not reach the signup service." },
      { status: 502 },
    );
  }
}
