import { Link } from "react-router-dom";
import styles from "./index.module.scss";

interface lProps {
  title: string;
  id: string;
  movies: any[];
}

export default function List({ title, id, movies }: lProps) {
  return (
    <>
      <Link to={`/list/${id}`}>
        <div className={styles.list}>
          <div>
            {movies.slice(0, 3).map((movie) => (
              <img
                key={movie.id}
                className={styles.moviesInList}
                src={movie.poster_path}
                alt={movie.title}
              />
            ))}
          </div>
          <h5 className={styles.title}>{title}</h5>
        </div>
      </Link>
    </>
  );
}
