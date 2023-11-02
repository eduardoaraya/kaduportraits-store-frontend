import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@kaduportraits-store/ui/header";
import CartProvider from "@kaduportraits-store/context/cart-provider";
import OverlayerProvider, {
  OverlayerContext,
} from "@kaduportraits-store/context/overlayer-provider";
import { useContext } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaduportraits",
  description: "Your best moments forever",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`relative ${inter.className}`}>
        <OverlayerProvider>
          <CartProvider>
            <Header></Header>
            {children}
          </CartProvider>
        </OverlayerProvider>
      </body>
    </html>
  );
}
