import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;

/**
 * The default Open Graph / Twitter card image for every page (any route
 * can override this by adding its own `opengraph-image.tsx`, but none does
 * today — one shared image is enough for a site this size). Generated at
 * build time via `next/og`'s `ImageResponse`, not a static file someone
 * has to remember to update — the colors/copy below stay in sync with the
 * rest of the site automatically since they're read from `site.ts`.
 *
 * Deliberately uses a plain bold sans-serif rather than the site's actual
 * Fredoka display font — `ImageResponse` needs real font file bytes handed
 * to it, and fetching those from Google Fonts at build time would make the
 * build depend on a live network call, which this project avoids on
 * principle (everything else here builds fully offline).
 */
export default function OpengraphImage() {
  const dots = ["#9cc872", "#fdc4d0", "#4399bd", "#99daf6", "#ffe99f"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
          backgroundColor: "#fdfbf6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", gap: 18 }}>
          {dots.map((color) => (
            <div
              key={color}
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                backgroundColor: color,
              }}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 700,
            color: "#2b2420",
            textAlign: "center",
            maxWidth: 980,
          }}
        >
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", fontSize: 36, fontWeight: 600, color: "#4399bd" }}>
          {siteConfig.tagline}
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "rgba(43,36,32,0.6)" }}>
          {siteConfig.location}
        </div>
      </div>
    ),
    { ...size },
  );
}
