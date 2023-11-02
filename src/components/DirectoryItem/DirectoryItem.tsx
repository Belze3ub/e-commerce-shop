import './DirectoryItem.css';
import { Directory } from '../Directory/Directory';
import { Link } from 'react-router-dom';

interface Props {
  directory: Directory;
}

const DirectoryItem = ({ directory }: Props) => {
  const { imageUrl, title } = directory;
  return (
    <Link className="directory-item-container" to={`/shop/${title}`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="directory-item-body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </Link>
  );
};

export default DirectoryItem;
