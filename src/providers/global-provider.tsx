"use client";

import CartProvider from "./cart-provider";
import OverlayerProvider from "./overlayer-provider";

export function GlobalProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <OverlayerProvider>
      <CartProvider>{children}</CartProvider>
    </OverlayerProvider>
  );
}
