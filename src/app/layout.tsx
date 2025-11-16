import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrimusQuant | Primus Systems LLC",
  description: "Experimental Reinforcement Learning perpetual trading research system on Drift Protocol / Solana",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-gray-300 font-mono">{children}</body>
    </html>
  );
}
