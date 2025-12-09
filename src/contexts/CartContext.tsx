import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { useCart } from '../hooks/useCart';

interface CartContextValue {
  items: ReturnType<typeof useCart>['items'];
  addToCart: ReturnType<typeof useCart>['addToCart'];
  removeFromCart: ReturnType<typeof useCart>['removeFromCart'];
  updateQuantity: ReturnType<typeof useCart>['updateQuantity'];
  clearCart: ReturnType<typeof useCart>['clearCart'];
  totalItems: ReturnType<typeof useCart>['totalItems'];
  totalPrice: ReturnType<typeof useCart>['totalPrice'];
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const cart = useCart();

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};
