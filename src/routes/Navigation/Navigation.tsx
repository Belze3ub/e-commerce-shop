import './Navigation.css'
import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/007 crown.svg'

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          {/* <div>E-commerce-shop</div> */}
          <img src={logo} alt="Logo" />
        </Link>
        <ul className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
          <Link className="nav-link" to="/auth">
            Sign in
          </Link>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation