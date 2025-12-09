import { useState, useCallback } from 'react';
import type { Product } from '../types/product';

export interface CartItem {
  product: Product;
  quantity: number;
}

export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((product: Product) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentItems, { product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.product.id !== productId)
    );
  }, []);

  const updateQuantity = useCallback(
    (productId: number, quantity: number) => {
      if (quantity <= 0) {
        removeFromCart(productId);
        return;
      }

      setItems((currentItems) =>
        currentItems.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      );
    },
    [removeFromCart]
  );

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  };
};
