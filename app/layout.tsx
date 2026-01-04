import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ELAH | Reasoning-Level Security for Agentic AI",
  description: "ELAH closes the Intent Gap by validating an agent's reasoning before tool execution. Reasoning-level security platform for autonomous AI agents.",
  keywords: ["AI security", "agentic AI", "reasoning security", "intent validation", "autonomous agents", "cybersecurity"],
  authors: [{ name: "ELAH" }],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "ELAH | Reasoning-Level Security for Agentic AI",
    description: "Reasoning-level security platform that validates agent reasoning before tool execution.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELAH | Reasoning-Level Security for Agentic AI",
    description: "Reasoning-level security platform that validates agent reasoning before tool execution.",
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

