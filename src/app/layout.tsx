import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://bensamoladoyin.vercel.app"),
  title: "Ben Sam Oladoyin · AI & ML Engineer | Founder of Trax & BTEHub Solutions",
  description:
    "Portfolio of Ben Sam Oladoyin — AI & ML Engineer with 5+ years of experience building and deploying production-grade ML models, LLM architectures, and scalable intelligent systems.",
  keywords: [
    "Ben Sam Oladoyin",
    "AI Engineer",
    "Machine Learning Engineer",
    "BTEHub Solutions",
    "Trax Media",
    "Deep Learning",
    "Computer Vision",
    "Generative AI",
    "Nigeria",
    "Portfolio",
  ],
  authors: [{ name: "Ben Sam Oladoyin", url: "https://bensamoladoyin.vercel.app" }],
  openGraph: {
    title: "Ben Sam Oladoyin · AI & ML Engineer",
    description:
      "Founder of Trax & BTEHub Solutions. Building production-grade AI systems, LLMs, and real engineering.",
    url: "https://bensamoladoyin.vercel.app",
    siteName: "Ben Sam Portfolio",
    images: [
      {
        url: "/bensam-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Ben Sam Oladoyin",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
