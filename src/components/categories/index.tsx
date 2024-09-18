import styles from './index.module.scss';

interface CategoryProps {
  title: string;
  imageUrl: string; 
}

const Category: React.FC<CategoryProps> = ({ title, imageUrl }) => {
  return (
    <div className={styles.category}>
      <img src={imageUrl} alt={title} className={styles.categoryImage} />
      <h4 className={styles.categoryTitle}>{title}</h4>
    </div>
  );
};

export default Category;
