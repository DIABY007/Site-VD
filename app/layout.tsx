import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Destroy Lonely - IF LOOKS COULD KILL",
  description: "Official reproduction of the Hero Section",
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
