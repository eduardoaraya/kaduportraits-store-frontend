
import { createContext } from 'react';

const INITIAL_STATE = {
  items: [],
  total: 0,
};

export const CartContext = createContext({})
 
export default function CartProvider({ children }: { children: React.ReactNode}) {
  return <CartContext.Provider value={INITIAL_STATE}>{children}</CartContext.Provider>
}
