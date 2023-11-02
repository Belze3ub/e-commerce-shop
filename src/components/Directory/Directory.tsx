import './Directory.css';
import DirectoryItem from '../DirectoryItem/DirectoryItem';

export interface Directory {
  id: number;
  title: string;
  imageUrl: string;
}

interface Props {
  directories: Directory[];
}

const Directory = ({ directories }: Props) => {
  return (
    <div className="directories-container">
      {directories.map((directory) => (
        <DirectoryItem key={directory.id} directory={directory} />
      ))}
    </div>
  );
};

export default Directory;
