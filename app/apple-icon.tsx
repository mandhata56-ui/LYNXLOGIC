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
          background: "#0E0F0D",
        }}
      >
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: 20,
            border: "10px solid #F4F1EA",
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
              background: "#F0A93B",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
