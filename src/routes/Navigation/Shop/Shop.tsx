import CategoriesPreview from '../../../components/CategoriesPreview/CategoriesPreview';
import Category from '../../Category/Category';
import './Shop.css';
import { Route, Routes } from 'react-router-dom';
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
