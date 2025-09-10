import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiet Hand Creative",
  description: "Poised · Mindful · Modern · Tasteful · Credible",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
