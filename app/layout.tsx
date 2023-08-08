import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gold Rate Pakistan",
  description: "Current gold rates in Pakistan",
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
