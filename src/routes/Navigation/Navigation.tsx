import './Navigation.css';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/007 crown.svg';
import UserContext from '../../contexts/UserContext';
import { useContext } from 'react';
import { signOutUser } from '../../utils/firebase';
import CartIcon from '../../components/CartIcon/CartIcon';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <ul className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign in
            </Link>
          )}
          <CartIcon />
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
