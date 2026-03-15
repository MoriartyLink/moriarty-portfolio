import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Mori Files | System Architecture & Community Building",
  description: "Min Thu Khaing (Mori) - Aspiring System Architect and Community Builder. Specializing in Venture Studio infrastructure, scalable backend systems, and community-powered software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-mono antialiased">
        {children}
      </body>
    </html>
  );
}
