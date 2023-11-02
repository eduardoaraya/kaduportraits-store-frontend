"use client";

import { CartType } from "@kaduportraits-store/ui/cart";
import { Dispatch, SetStateAction, createContext, useState } from "react";

const STORAGE_KEY = "_cart";
let INITIAL_STATE: CartType;

if (typeof window !== "undefined") {
  const cached = localStorage.getItem(STORAGE_KEY);
  INITIAL_STATE = {
    items: cached ? JSON.parse(cached).items : {},
  };
} else {
  INITIAL_STATE = {
    items: {},
  };
}

export const CartContext = createContext<{
  cart: CartType;
  setCart?: Dispatch<SetStateAction<CartType>>;
}>({
  cart: INITIAL_STATE,
});

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, _setCart] = useState<CartType>(INITIAL_STATE);

  const setCart = (cart: SetStateAction<CartType>) => {
    _setCart(cart);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  };

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
