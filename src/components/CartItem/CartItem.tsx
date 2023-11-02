import { Product } from '../../shopData/shopData';
import './CartItem.css';

interface Props {
  cartItem: CartItem;
}

export interface CartItem extends Product {
  quantity: number;
}

const CartItem = ({ cartItem }: Props) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div>
        <div className="cart-item-name">{name}</div>
        <div>
          <span className="cart-item-quantity">{`${quantity} x $${price}`}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
