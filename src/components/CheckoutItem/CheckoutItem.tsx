import { useContext } from 'react';
import { CartItem } from '../CartItem/CartItem';
import './CheckoutItem.css';
import { CartContext } from '../../contexts/CartContext';

interface Props {
  cartItem: CartItem;
}

const CheckoutItem = ({ cartItem }: Props) => {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeItemFromCart,
  } = useContext(CartContext);
  const { id, imageUrl, name, price, quantity } = cartItem;

  return (
    <div key={id} className="checkout-item-container">
      <img src={imageUrl} alt={name} />
      <div>{name}</div>
      <div className="quantity-container">
        <button onClick={() => decreaseQuantity(cartItem)}>{'<'}</button>
        <div>{quantity}</div>
        <button onClick={() => increaseQuantity(cartItem)}>{'>'}</button>
      </div>
      <div>{price}</div>
      <button onClick={() => removeItemFromCart(cartItem)}>x</button>
    </div>
  );
};

export default CheckoutItem;
