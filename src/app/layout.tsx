import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OJOL - The Future of Transportation | AI-Powered Ride-Hailing",
  description: "Experience the next generation of ride-hailing with OJOL. Only 8% fee, AI-powered dispatch, and blockchain-based rewards. Join the mobility revolution!",
  keywords: ["OJOL", "ride-hailing", "transportation", "crypto", "blockchain", "AI", "mobility", "OJOL token", "future of transportation", "Web3", "decentralized"],
  authors: [{ name: "OJOL Team" }],
  icons: {
    icon: "/ojol-logo.png",
    shortcut: "/ojol-logo.png",
    apple: "/ojol-logo.png",
    favicon: "/favicon.png",
  },
  openGraph: {
    title: "OJOL - The Future of Transportation",
    description: "Revolutionary ride-hailing platform with AI-powered dispatch, 8% lowest industry fee, and blockchain-based token rewards. Experience the future of mobility!",
    url: "https://ojol-website.vercel.app",
    siteName: "OJOL",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/ojol-logo.png",
        width: 1200,
        height: 1200,
        alt: "OJOL - The Future of Transportation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OJOL - The Future of Transportation",
    description: "Revolutionary ride-hailing platform with AI-powered dispatch, 8% lowest industry fee, and blockchain-based token rewards. Experience the future of mobility!",
    images: ["/ojol-logo.png"],
    creator: "@ojolasia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
