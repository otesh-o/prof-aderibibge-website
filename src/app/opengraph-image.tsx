import { ImageResponse } from "next/og";

export const alt = "Prof. Adebola Aderibigbe, Professor of Mass Communication, Federal University Oye-Ekiti";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The picture shown when the site is shared on WhatsApp, LinkedIn, X and similar. */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B0F17",
          color: "#E5E7EB",
          padding: "72px 84px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="14" fill="#111827" />
            <path d="M15 50 L32 13 L49 50" fill="none" stroke="#E5E7EB" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23 38 H41" fill="none" stroke="#3B82F6" strokeWidth="6" strokeLinecap="round" />
          </svg>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: 104, height: 6, background: "#3B82F6", marginBottom: 40 }} />
          <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            Adebola Adewunmi Aderibigbe
          </div>
          <div style={{ fontSize: 36, color: "#9CA3AF", marginTop: 32 }}>Professor of Mass Communication</div>
          <div style={{ fontSize: 32, color: "#9CA3AF", marginTop: 8 }}>Federal University Oye-Ekiti</div>
        </div>

        <div style={{ fontSize: 28, color: "#3B82F6" }}>adebolaaderibigbe.com</div>
      </div>
    ),
    { ...size },
  );
}
