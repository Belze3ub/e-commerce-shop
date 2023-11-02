import { ReactNode, createContext, useEffect, useState } from 'react';
import { CartItem } from '../components/CartItem/CartItem';
import { Product } from '../shopData/shopData';

interface Props {
  children: ReactNode;
}

interface CartContextProps {
  cartItems: CartItem[];
  setCartItems: (products: CartItem[]) => void;
  addItemToCart: (product: Product) => void;
  removeItemFromCart: (cartItem: CartItem) => void;
  isCartOpen: boolean;
  setIsCartOpen: (isCartOpen: boolean) => void;
  cartCount: number;
  increaseQuantity: (cartItem: CartItem) => void;
  decreaseQuantity: (cartItem: CartItem) => void;
  total: number;
  setTotal: (total: number) => void;
}

export const CartContext = createContext<CartContextProps>({
  cartItems: [],
  setCartItems: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartCount: 0,
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  total: 0,
  setTotal: () => {},
});

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: Product
): CartItem[] => {
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

const increaseCartItemQuantity = (
  cartItems: CartItem[],
  productToIncrease: CartItem
) => {
  return cartItems.map((item) => {
    if (item.id === productToIncrease.id) {
      return { ...item, quantity: item.quantity + 1 };
    }
    return item;
  });
};

const decreaseCartItemQuantity = (
  cartItems: CartItem[],
  productToDecrease: CartItem
) => {
  return cartItems
    .map((item) => {
      if (item.id === productToDecrease.id) {
        return { ...item, quantity: Math.max(0, item.quantity - 1) };
      }
      return item;
    })
    .filter((item) => item.quantity > 0);
};

const removeCartItem = (cartItems: CartItem[], productToRemove: CartItem) => {
  return cartItems.filter(item => (
    item.id !== productToRemove.id
  ))
}

export const CartProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);

  const addItemToCart = (product: Product) => {
    setCartItems(addCartItem(cartItems, product));
    setTotal((prevTotal: number) => prevTotal + product.price)
  };

  const removeItemFromCart = (cartItem: CartItem) => {
    setCartItems(removeCartItem(cartItems, cartItem));
    setTotal((prevTotal: number) => prevTotal - (cartItem.price * cartItem.quantity));
  }

  const increaseQuantity = (productToIncrease: CartItem) => {
    setCartItems(increaseCartItemQuantity(cartItems, productToIncrease));
    setTotal((prevTotal: number) => prevTotal + productToIncrease.price);
  };

  const decreaseQuantity = (productToDecrease: CartItem) => {
    setCartItems(decreaseCartItemQuantity(cartItems, productToDecrease));
    setTotal((prevTotal: number) => prevTotal - productToDecrease.price);
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  const value = {
    cartItems,
    setCartItems,
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    cartCount,
    increaseQuantity,
    decreaseQuantity,
    total,
    setTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
