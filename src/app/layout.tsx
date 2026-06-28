import type { Metadata, Viewport } from "next";
import "./globals.css";
import { fontVariables } from "./fonts";
import { DEFAULT_THEME, SURFACE_COLOR, themeInitScript } from "@/lib/theme";
import { MotionProvider } from "@/lib/motion-provider";
import { SmoothScroll } from "@/lib/smooth-scroll";

export const metadata: Metadata = {
  title: {
    default: "horz — Scale Horizontally. Focus Vertically.",
    template: "%s — horz",
  },
  description: "The modular backend for everything around your business.",
  metadataBase: new URL("https://horz.dev"),
};

export const viewport: Viewport = {
  // static = the default surface (dark "blue hour"); the init script + toggle
  // keep the meta in sync with the real data-theme, not the OS preference.
  themeColor: SURFACE_COLOR[DEFAULT_THEME],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme={DEFAULT_THEME}
      className={fontVariables}
      suppressHydrationWarning
    >
      <head>
        {/* set the chosen surface before first paint — no flash for day-station */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        {/* film grain over everything — kills banding, prints the surface */}
        <div className="grain" aria-hidden="true" />
        {/* calm, low-inertia smooth scroll (§8.11); off on touch + reduced-motion */}
        <SmoothScroll />
        {/* reduced-motion is first-class (§8.10): Framer respects the OS query */}
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
