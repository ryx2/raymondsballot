export const dynamic = "force-dynamic";

interface CivicRequestBody {
  address?: unknown;
  electionId?: unknown;
  officialOnly?: unknown;
}

export async function POST(request: Request) {
  const apiKey = process.env.GOOGLE_CIVIC_API_KEY;
  if (!apiKey) {
    return Response.json(
      {
        error:
          "Google Civic lookup is not configured. Set GOOGLE_CIVIC_API_KEY on the server.",
      },
      { status: 501 }
    );
  }

  let body: CivicRequestBody;
  try {
    body = (await request.json()) as CivicRequestBody;
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const address =
    typeof body.address === "string" ? body.address.trim() : "";
  if (address.length < 8) {
    return Response.json(
      { error: "A residential street address is required." },
      { status: 400 }
    );
  }

  const params = new URLSearchParams({
    address,
    key: apiKey,
  });

  if (typeof body.electionId === "string" && body.electionId.trim()) {
    params.set("electionId", body.electionId.trim());
  }

  if (body.officialOnly === true) {
    params.set("officialOnly", "true");
  }

  const civicResponse = await fetch(
    `https://www.googleapis.com/civicinfo/v2/voterinfo?${params.toString()}`,
    {
      headers: { Accept: "application/json" },
      cache: "no-store",
    }
  );

  const data = await civicResponse.json();
  if (!civicResponse.ok) {
    return Response.json(
      {
        error:
          data?.error?.message ??
          "Google Civic lookup failed for this address.",
        details: data?.error,
      },
      { status: civicResponse.status }
    );
  }

  return Response.json(data, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
