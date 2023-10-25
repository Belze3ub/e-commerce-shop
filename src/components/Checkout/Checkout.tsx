import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import './Checkout.css'
import CheckoutItem from '../CheckoutItem/CheckoutItem';
const Checkout = () => {
  const {cartItems, total} = useContext(CartContext);
  return (
    <>
      <div className="checkout-container">
        <div className="checkout-header">
          <div className="header-block image">Product</div>
          <div className="header-block">Description</div>
          <div className="header-block">Quantity</div>
          <div className="header-block">Price</div>
          <div className="header-block remove">Remove</div>
        </div>
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} cartItem={item} />
        ))}
      </div>
      <div className="total-price">{`TOTAL: $${total}`}</div>
    </>
  );
}

export default Checkout