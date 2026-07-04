import { ImageResponse } from "next/og";

export const alt = "LynxLogic — AI Automation & IT Consulting";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#0B0E13",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 40,
            fontWeight: 700,
            color: "#E7E5DF",
            marginBottom: 32,
          }}
        >
          LynxLogic
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 4,
              border: "2px solid #E7E5DF",
              transform: "rotate(45deg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                backgroundColor: "#D9A441",
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontWeight: 600,
            color: "#E7E5DF",
            maxWidth: 900,
            lineHeight: 1.15,
          }}
        >
          We find the structure hiding in the noise
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#71858E",
            marginTop: 28,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          AI Automation — IT Consulting
        </div>
      </div>
    ),
    { ...size }
  );
}
