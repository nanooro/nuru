import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import HeaderClientWrapper from "../components/ui/HeaderClientWrapper";
import { ThemeProviderClient } from "./ThemeProviderClient";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nannuru.com"),
  title: "Nannuru",
  description: "News and entertainment",
  icons: {
    icon: "/logo.jpg",
  },
  openGraph: {
    title: "Nannuru",
    description: "News and entertainment",
    images: ["/logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/logo.jpg"],
  },
};

import Footer from "../components/ui/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProviderClient>
          <HeaderClientWrapper />
          <main className="pt-24">{children}</main>
          <Footer />
        </ThemeProviderClient>
      </body>
    </html>
  );
}
