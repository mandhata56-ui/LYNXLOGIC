import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
            width: 18,
            height: 18,
            borderRadius: 4,
            border: "2px solid #F4F1EA",
            transform: "rotate(45deg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
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
