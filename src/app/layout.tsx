import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "./providers";
import GoogleAnalytics from "./GoogleAnalytics";
import Hotjar from "./Hotjar";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Eveden Meta",
  description:
    "Explore Eveden Meta for deck building, sharing, and insights into the latest Eveden card game strategies. Connect with players and enhance your gameplay.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ? (
          <GoogleAnalytics
            ga_id={process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}
          />
        ) : null}
        {process.env.NEXT_PUBLIC_HOTJAR_ID ? (
          <Hotjar hjid={process.env.NEXT_PUBLIC_HOTJAR_ID} />
        ) : null}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
