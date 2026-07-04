import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0E13",
        }}
      >
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: 20,
            border: "10px solid #E7E5DF",
            transform: "rotate(45deg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "#D9A441",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
