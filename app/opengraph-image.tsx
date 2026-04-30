import { ImageResponse } from "next/og";

export const alt =
  "Raymond's Ballot — Find every race on your ballot";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f5f1e8",
          color: "#1a1a1a",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          padding: "70px 80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderTop: "16px solid #1a1a1a",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
            letterSpacing: "0.2em",
            fontWeight: 700,
            textTransform: "uppercase",
            color: "#4a4a4a",
          }}
        >
          <span>Address-Based Ballot Lookup</span>
          <span style={{ color: "#d63d2e" }}>· 2026</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div
            style={{
              fontSize: 132,
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              display: "flex",
              alignItems: "baseline",
            }}
          >
            <span>Raymond&apos;s</span>
            <span
              style={{
                color: "#d63d2e",
                margin: "0 18px",
                fontSize: 132,
              }}
            >
              ·
            </span>
            <span>Ballot</span>
          </div>
          <div
            style={{
              fontSize: 38,
              color: "#4a4a4a",
              fontWeight: 500,
              maxWidth: 950,
              lineHeight: 1.25,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            Pick your state and county, then enter an address to find local,
            state, federal, and ballot-measure contests.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "3px solid #1a1a1a",
            paddingTop: 24,
          }}
        >
          <div style={{ display: "flex", gap: 60 }}>
            <Stat label="States" value="50" />
            <Stat label="Counties" value="3K+" />
            <Stat label="Lookup" value="Live" />
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#4a4a4a",
            }}
          >
            raymondsballot.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <div
        style={{
          fontSize: 14,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontWeight: 700,
          color: "#8a8a8a",
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: 56, fontWeight: 900, lineHeight: 1 }}>
        {value}
      </div>
    </div>
  );
}
