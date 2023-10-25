import { ReactNode, createContext, useState } from 'react';
import PRODUCTS from '../shopData/shopData.json';

interface Props {
  children: ReactNode;
}

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface ProductsContextProps {
  products: Product[],
  setProducts: (products: Product[]) => void,
}

export const ProductsContext = createContext<ProductsContextProps>({
  products: [],
  setProducts: () => {},
});

export const ProductProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const value = { products, setProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
