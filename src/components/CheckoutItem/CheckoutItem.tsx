import { useContext } from 'react';
import { CartItem } from '../CartItem/CartItem';
import './CheckoutItem.css';
import { CartContext } from '../../contexts/CartContext';
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

interface Props {
  cartItem: CartItem;
}

const CheckoutItem = ({ cartItem }: Props) => {
  const { increaseQuantity, decreaseQuantity, removeItemFromCart } =
    useContext(CartContext);
  const { id, imageUrl, name, price, quantity } = cartItem;

  return (
    <div key={id} className="checkout-item-container">
      <div className="image-container checkout-item-cell">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="name checkout-item-cell">{name}</div>
      <div className="checkout-item-cell">
        <div className="quantity">
          <a className="arrow-btn" onClick={() => decreaseQuantity(cartItem)}>
            <AiOutlineLeft />
          </a>
          <span>{quantity}</span>
          <a className="arrow-btn" onClick={() => increaseQuantity(cartItem)}>
            <AiOutlineRight />
          </a>
        </div>
      </div>
      <div className="price checkout-item-cell">{`$${price}`}</div>
      <div className="remove-container checkout-item-cell">
        <a className="remove-btn" onClick={() => removeItemFromCart(cartItem)}>
          <AiOutlineClose />
        </a>
      </div>
    </div>
  );
};

export default CheckoutItem;
