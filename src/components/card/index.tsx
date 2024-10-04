import { Link } from "react-router-dom";
import styles from "./index.module.scss";

interface CardProps {
  id: number;
  title: string;
  imageUrl: string;
}
const defaultImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo6yxIZRkMjjGozYJIXfFO99wPZa4K8cXh4Q&s";
const Card: React.FC<CardProps> = ({ id, title, imageUrl }) => {
  const validImageUrl =
    imageUrl && !imageUrl.endsWith("null") ? imageUrl : defaultImage;
  return (
    <Link to={`/film/${id}`}>
      <div className={styles.card}>
        <img src={validImageUrl} alt={title} className={styles.cardImage} />
        <h4>{title}</h4>
        <button className={styles.favoriteButton}>+</button>
      </div>
    </Link>
  );
};

export default Card;
