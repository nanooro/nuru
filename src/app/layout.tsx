import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProviderClient } from "./ThemeProviderClient";
import Head from "next/head"; // ✅ add this

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/logo.jpg" type="image/jpeg" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
        style={{ colorScheme: "dark" }}
      >
        <ThemeProviderClient>{children}</ThemeProviderClient>
      </body>
    </html>
  );
}