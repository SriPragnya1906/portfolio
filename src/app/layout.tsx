import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google";
import { SITE_METADATA } from "@/lib/constants";
import "./globals.css";
import { SmoothCursor } from "@/components/lightswind/smooth-cursor";
import "@/lib/firebase";

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased pb-32">
        <SmoothCursor
          color="#6366f1"
          size={18}
          glowEffect
          showTrail
          trailLength={4}
        />
        {children}
      </body>
    </html>
  );
}
