import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#05070d",
};

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
    icon: [
      { url: "/icon.svg?v=2", type: "image/svg+xml" },
      { url: "/favicon-32.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/icon-512.png?v=2", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon-32.png?v=2",
    apple: "/apple-icon.png?v=2",
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
  // The site is already dark; dark-mode extensions that recolor it break the hero.
  other: {
    "darkreader-lock": "true",
  },
};

// Dark Reader honors darkreader-lock only in its Dynamic mode. Static and
// Filter modes paint an opaque background on every element, so undo them.
const darkReaderGuard = `(function () {
  var root = document.documentElement;
  function strip() {
    var mode = root.getAttribute("data-darkreader-mode");
    if (mode !== "static" && mode !== "filter") return;
    ["dark-reader-style", "dark-reader-svg"].forEach(function (id) {
      var node = document.getElementById(id);
      if (node) node.remove();
    });
    root.removeAttribute("data-darkreader-mode");
  }
  new MutationObserver(strip).observe(root, {
    attributes: true,
    attributeFilter: ["data-darkreader-mode"],
  });
  strip();
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: darkReaderGuard }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

