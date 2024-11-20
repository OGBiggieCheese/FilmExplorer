import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { ICard } from "../../types";

const defaultImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo6yxIZRkMjjGozYJIXfFO99wPZa4K8cXh4Q&s";

const Card: React.FC<ICard> = ({
  id,
  title,
  poster_path,
  source,
  showButton,
}) => {
  const validImageUrl =
    poster_path &&
    !poster_path.endsWith("null") &&
    !poster_path.endsWith("undefined")
      ? poster_path
      : defaultImage;

  return (
    <div className={styles.card}>
      <Link to={`/film/${source}/${id}`}>
        <img src={validImageUrl} alt={title} className={styles.cardImage} />
        <h4 className={styles.cardTitle}>{title}</h4>
      </Link>
      {showButton && <button className={styles.favoriteButton}>+</button>}
    </div>
  );
};

export default Card;
