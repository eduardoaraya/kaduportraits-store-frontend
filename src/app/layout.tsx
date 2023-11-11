import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Layout as UILayout } from "@kaduportraits-store/components/ui/layout";
import { GlobalProvider } from "@kaduportraits-store/providers/global-provider";

import "./globals.css";

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
        <GlobalProvider>
          <UILayout>{children}</UILayout>
        </GlobalProvider>
      </body>
    </html>
  );
}
