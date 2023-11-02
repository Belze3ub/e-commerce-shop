import { CartContext } from '../../contexts/CartContext';
import Button from '../Button/Button';
import { useContext } from 'react';
import './ProductCard.css';
import { Product } from '../../shopData/shopData';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{`$${price}`}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
