import { useContext } from 'react';

import { CategoriesContext } from '../../contexts/CategoriesContext';
import CategoryPreview from '../CategoryPreview/CategoryPreview';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title: string) => {
        const products = categoriesMap[title].items;
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
