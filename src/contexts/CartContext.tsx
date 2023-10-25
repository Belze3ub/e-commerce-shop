import { ReactNode, createContext, useEffect, useState } from 'react';
import { CartItem } from '../components/CartItem/CartItem';
import { Product } from './ProductsContext';

interface Props {
  children: ReactNode;
}

interface CartContextProps {
  cartItems: CartItem[];
  setCartItems: (products: CartItem[]) => void;
  addItemToCart: (product: Product) => void;
  isCartOpen: boolean;
  setIsCartOpen: (isCartOpen: boolean) => void;
  cartCount: number;
}

export const CartContext = createContext<CartContextProps>({
  cartItems: [],
  setCartItems: () => {},
  addItemToCart: () => {},
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartCount: 0,
});

const addCartItem = (cartItems: CartItem[], productToAdd: Product): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem: CartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

export const CartProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const addItemToCart = (product: Product) => {
    setCartItems(addCartItem(cartItems, product));
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);
    setCartCount(newCartCount);
  }, [cartItems])

  const value = {
    cartItems,
    setCartItems,
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartCount,
    setCartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
