import { Link } from 'react-router-dom';
import { Product } from '../../shopData/shopData';
import ProductCard from '../ProductCard/ProductCard';

import './CategoryPreview.css';

interface Props {
  title: string;
  products: Product[];
}

const CategoryPreview = ({ title, products }: Props) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title} className="title">
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
