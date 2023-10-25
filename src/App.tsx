import { Route, Routes } from 'react-router-dom';
import Home from './routes/Navigation/Home/Home';
import Navigation from './routes/Navigation/Navigation';
import Authentication from './routes/Authentication/Authentication';
import Shop from './routes/Navigation/Shop/Shop';
import Checkout from './components/Checkout/Checkout';

const Contact = () => {
  return <h1>Contact page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
