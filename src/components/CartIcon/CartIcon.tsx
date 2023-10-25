import { useContext } from 'react';
import { PiHandbag } from 'react-icons/pi';

import './CartIcon.css';
import CartDropdown from '../CartDropdown/CartDropdown';
import { CartContext } from '../../contexts/CartContext';

const CartIcon = () => {
  const {
    setIsCartOpen,
    isCartOpen,
    cartCount,
  } = useContext(CartContext);

  return (
    <div
      className={'cart-container'}
      onClick={() => setIsCartOpen(!isCartOpen)}
    >
      <PiHandbag className="cart-icon" />
      <span className="cart-count">{cartCount}</span>
      {isCartOpen && <CartDropdown />}
    </div>
  );
};

export default CartIcon;
