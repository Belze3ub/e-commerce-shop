import ProductCard from '../../../components/ProductCard/ProductCard';
import { Product, ProductsContext } from '../../../contexts/ProductsContext';
import { useContext } from 'react';

import './Shop.css'
const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product: Product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;