import { useContext } from 'react';
import Button from '../Button/Button';
import './CartDropdown.css';
import { CartContext } from '../../contexts/CartContext';
import CartItem from '../CartItem/CartItem';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className={'cart-dropdown-container'}>
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <div className="cart-empty">Your cart is empty</div>
        )}
      </div>
      <Button>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
