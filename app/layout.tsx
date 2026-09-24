import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grovana | 10 minutes grocery delievery app",
  description: "10 minutes grocery delievery app",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className="w-full min-h-screen bg-linear-to-b from-green-100 to-white">{children}</body>
    </html>
  );
}
