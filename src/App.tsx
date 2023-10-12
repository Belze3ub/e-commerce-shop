import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Navigation from './routes/Navigation/Navigation';
import SignIn from './routes/SignIn';

const Shop = () => {
  return <h1>Shop page</h1>;
};
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
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;