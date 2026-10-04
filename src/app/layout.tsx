import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";

import { siteConfig } from "@/config/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.hospital.shortName} Connect | Patient Quick Access`,
  description:
    "Mobile-first quick access website for Madonna and Child Medical Center patient services, directions, contacts, and feedback.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#015E32",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
