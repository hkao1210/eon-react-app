import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/shared/Navigation/Navigation";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700"] });

export const metadata: Metadata = {
  title: "YouFlix",
  description: "Youtube that looks like Netflix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}><Navigation/>{children}</body>
    </html>
  );
}
