import './CategoriesList.css'
import CategoryItem from '../CategoryItem/CategoryItem';

export interface Category {
  id: number;
  title: string;
  imageUrl: string;
}

interface Props {
  categories: Category[];
}

const CategoriesList = ({categories} : Props) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesList;
