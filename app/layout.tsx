import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.elahsecurity.com"),
  title: "ELAH | Verified access for AI agents",
  description:
    "ELAH verifies that an AI agent is acting with valid, limited permission before a protected website or API action runs.",
  keywords: [
    "AI agents",
    "delegated access",
    "agent verification",
    "scoped permissions",
    "B2B SaaS",
    "ELAH",
  ],
  authors: [{ name: "ELAH" }],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ELAH | Verified access for AI agents",
    description:
      "ELAH verifies that an AI agent is acting with valid, limited permission before a protected website or API action runs.",
    url: "https://www.elahsecurity.com",
    siteName: "ELAH Security",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELAH | Verified access for AI agents",
    description:
      "A receiving-site verification layer for signed, delegated, scoped agent access.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

