import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "NANODE",
  description: "NANODE HARWARE SHOWCASE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="scroll-smooth">{children}</body>
    </html>
  );
}
