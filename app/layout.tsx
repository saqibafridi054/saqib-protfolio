import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://saqibafridi.dev"),
  title: "Saqib Afridi | Senior Flutter Developer",
  description:
    "Senior Flutter Developer from Peshawar, Pakistan. I build high-performance, pixel-perfect mobile applications for iOS & Android. 4+ years of experience, 50+ apps delivered.",
  keywords: [
    "Flutter Developer",
    "Mobile App Developer",
    "Dart",
    "Firebase",
    "Cross-Platform",
    "iOS",
    "Android",
    "Peshawar",
    "Pakistan",
    "Freelance",
  ],
  authors: [{ name: "Saqib Afridi", url: "https://saqibafridi.dev" }],
  creator: "Saqib Afridi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saqibafridi.dev",
    title: "Saqib Afridi | Senior Flutter Developer",
    description:
      "Senior Flutter Developer building high-performance mobile apps. 50+ apps delivered, 4+ years experience.",
    siteName: "Saqib Afridi Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saqib Afridi — Senior Flutter Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saqib Afridi | Senior Flutter Developer",
    description:
      "Senior Flutter Developer building high-performance mobile apps. 50+ apps, 4+ years.",
    creator: "@saqib_afridi",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface antialiased">{children}</body>
    </html>
  );
}