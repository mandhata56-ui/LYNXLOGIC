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
          background: "#0B0E13",
        }}
      >
        <div
          style={{
            width: 18,
            height: 18,
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
              width: 6,
              height: 6,
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
