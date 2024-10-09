import {
  HeartOutlined,
  StarOutlined,
  UnorderedListOutlined,
  HeartFilled,
} from "@ant-design/icons";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { JSONMovieUseCases } from "../../useCases/JSONMoviesUseCases";
import { message } from "antd";
import { IFilm } from "../../types";

interface Film {
  id: string;
  title: string;
  posterUrl: string;
}

const filmDetailsFE: React.FC<IFilm> = ({
  title,
  description,
  imageUrl,
  posterUrl,
  genres,
  releaseDate,
  rated,
  id,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const handleAddToFavorites = () => {
    const favouriteFilm: Film = {
      id: id,
      title: title,
      posterUrl: posterUrl,
    };

    if (isFavorite) {
      JSONMovieUseCases.deleteFavouriteFilm(id);
      messageApi.open({
        type: "error",
        content: "Eliminada de favoritos",
        duration: 2,
      });
      setIsFavorite(false);
    } else {
      messageApi.open({
        type: "success",
        content: "Añadida a favoritos",
        duration: 2,
      });
      JSONMovieUseCases.addFavouriteFilm(favouriteFilm);
      setIsFavorite(true);
    }
  };
  useEffect(() => {
    const checkFavorites = async () => {
      const favorites = await JSONMovieUseCases.getFavourites();
      const favoriteFilmExists = favorites.some((film: Film) => film.id === id);
      setIsFavorite(favoriteFilmExists);
    };

    checkFavorites();
  }, [id]);

  return (
    <div className={styles.film}>
      <img src={imageUrl} alt={title} className={styles.filmImage} />

      <div className={styles.filmContent}>
        <img src={posterUrl} alt={title} className={styles.filmPoster} />

        <div className={styles.textContainer}>
          <h1 className={styles.filmTitle}>{title}</h1>
          <div className={styles.filmMore}>
            <p>{releaseDate}</p>
            <p>1hr 40min</p>
            <p>{rated}/10 ★</p>
          </div>
          <div className={styles.categories}>
            {genres.map((category, index) => (
              <button key={index} className={styles.categoryButton}>
                {category}
              </button>
            ))}
          </div>
          <h2 className={styles.filmDescription}>{description}</h2>

          <div>
            <button className={styles.btnAction}>
              <StarOutlined />
            </button>
            {contextHolder}
            <button className={styles.btnAction} onClick={handleAddToFavorites}>
              {isFavorite ? <HeartFilled /> : <HeartOutlined />}
            </button>
            <button className={styles.btnAction}>
              <UnorderedListOutlined />
            </button>
            <button className={styles.trailer}>Ver trailer ➡</button>
          </div>

          <div className={styles.castPrincipal}>
            <div className={styles.dn}>
              <h4>Takaomi Kanasaki</h4>
              <h5>Director</h5>
            </div>
            <div className={styles.dn}>
              <h4>Natsume Akatsuki</h4>
              <h5>Novela</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default filmDetailsFE;
