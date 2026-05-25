import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const outfit = Outfit({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "HageGames — Game Studio",
    template: "%s | HageGames",
  },
  description:
    "HageGames is a game studio crafting immersive gaming experiences across multiple platforms.",
  metadataBase: new URL("https://hagegames.com"),
  openGraph: {
    title: "HageGames — Game Studio",
    description: "Crafting immersive gaming experiences across multiple platforms.",
    url: "https://hagegames.com",
    siteName: "HageGames",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HageGames — Game Studio",
    description: "Crafting immersive gaming experiences across multiple platforms.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable} antialiased`}>
      <body className="grain min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
