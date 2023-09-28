import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

import SliderProvider from "@/providers/SliderProvider";
import Layout from "@/components/Layout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Style Vault",
  description: "",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SliderProvider />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
