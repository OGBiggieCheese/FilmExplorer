import { Link } from "react-router-dom";
import styles from "./index.module.scss";

interface CardProps {
  id: number;
  title: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ id, title, imageUrl }) => {
  return (
    <Link to={`/film/${id}`}>
      <div className={styles.card}>
        <img src={imageUrl} alt={title} className={styles.cardImage} />
        <h4>{title}</h4>
        <button className={styles.favoriteButton}>+</button>
      </div>
    </Link>
  );
};

export default Card;
