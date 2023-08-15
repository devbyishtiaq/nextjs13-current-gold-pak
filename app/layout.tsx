import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gold Rate Pakistan",
  description: "Current gold rates in Pakistan",
  icons: {
    icon: "/assets/favicon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
