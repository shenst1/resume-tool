import { SITE_URL } from "@/lib/site-url";
import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const title = "Andrew Shenstone — Senior Product Engineer";
const description =
  "Senior product engineer building AI-native products. Founder of Plantfolio. Full-stack with a front-end emphasis. Based in Bend, Oregon.";
const shareDescription =
  "I ship products people actually use—from discovery through production.";

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  title,
  description,
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title,
    description: shareDescription,
    url: "/",
    siteName: "Andrew Shenstone",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: shareDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${fraunces.variable} font-sans antialiased`}
      >
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
