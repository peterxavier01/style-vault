import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Cart } from "@chec/commerce.js/types/cart";

import "./globals.css";

import SliderProvider from "@/providers/SliderProvider";
import Layout from "@/components/Layout";
import getCart from "@/libs/getCart";

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
  const cart: Cart = await getCart();

  return (
    <html lang="en">
      <body className={poppins.className}>
        <SliderProvider cart={cart} />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
