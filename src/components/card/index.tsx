import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { movieUseCases } from "../../useCases/moviesUseCases";
import { useEffect } from "react";

interface CardProps {
  title: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl }) => {
  return (
    <Link to="/film/:filmID">
      <div className={styles.card}>
        <img src={imageUrl} alt={title} className={styles.cardImage} />
        <h4>{title}</h4>
        <button className={styles.favoriteButton}>+</button>
      </div>
    </Link>
  );
};

export default Card;
