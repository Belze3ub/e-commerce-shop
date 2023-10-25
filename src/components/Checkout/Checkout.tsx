import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import './Checkout.css'
import CheckoutItem from '../CheckoutItem/CheckoutItem';
const Checkout = () => {
  const {cartItems} = useContext(CartContext);
  return (
    <div className='checkout-container'>
      <div className='descriptor-container'>
        <div>Product</div>
        <div>Description</div>
        <div>Quantity</div>
        <div>Price</div>
        <div>Remove</div>
      </div>
      {cartItems.map(item => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
    </div>
  )
}

export default Checkout