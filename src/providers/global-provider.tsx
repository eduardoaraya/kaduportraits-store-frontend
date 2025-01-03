"use client";

import CartProvider from "./cart-provider";
import OverlayerProvider from "./overlayer-provider";
import { PreviewProvider } from "./preview-provider";

export function GlobalProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <OverlayerProvider>
      <CartProvider>
        <PreviewProvider>{children}</PreviewProvider>
      </CartProvider>
    </OverlayerProvider>
  );
}
