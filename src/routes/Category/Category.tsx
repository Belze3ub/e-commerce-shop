import { useContext, useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import { useParams } from 'react-router-dom';
import { Product } from '../../shopData/shopData';

import './Category.css';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (category && categoriesMap[category]) {
      setProducts(categoriesMap[category].items);
    } 
  }, [category, categoriesMap]);

  return (
    <div className="category-container">
      <h2>
        <span className="category-title">{category?.toUpperCase()}</span>
      </h2>
      <div className="category-products">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Category;
