import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

import SliderProvider from "@/providers/SliderProvider";
import ToasterProvider from "@/providers/ToasterProvider";

import Layout from "@/components/Layout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Style Vault",
  description:
    "Discover the latest fashion trends at StyleVault. Shop a wide range of stylish clothing, accessories, and more for men and women. Elevate your wardrobe with high-quality fashion essentials and exclusive offers. Stay in vogue with StyleVault today!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ToasterProvider />
        <SliderProvider />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
