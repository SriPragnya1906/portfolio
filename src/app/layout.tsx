import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google";
import { SITE_METADATA } from "@/lib/constants";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
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
      <body className="antialiased selection:bg-cyan/30 selection:text-white pb-32">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
