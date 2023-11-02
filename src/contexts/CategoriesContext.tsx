import { ReactNode, createContext, useEffect, useState } from 'react';
import {
  CategoryMap,
  getCategoriesAndDocuments,
} from '../utils/firebase';

interface Props {
  children: ReactNode;
}

interface CategoriesContextProps {
  categoriesMap: CategoryMap;
  setCategoriesMap: (categoriesMap: CategoryMap) => void;
}

export const CategoriesContext = createContext<CategoriesContextProps>({
  categoriesMap: {},
  setCategoriesMap: () => {},
});

export const CategoriesProvider = ({ children }: Props) => {
  const [categoriesMap, setCategoriesMap] = useState<CategoryMap>({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap)
    };
    getCategoriesMap();
  }, []);

  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  const value = { categoriesMap, setCategoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
