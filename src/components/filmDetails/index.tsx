import {
  HeartOutlined,
  UnorderedListOutlined,
  HeartFilled,
  EditOutlined,
} from "@ant-design/icons";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { JSONMovieUseCases } from "../../useCases/JSONMoviesUseCases";
import {
  message,
  Rate,
  Modal,
  Checkbox,
  ConfigProvider,
  Button,
  Input,
} from "antd";
import { IFavouriteFilm, IFilm, IGenre, IMovieList } from "../../types";
import { APIService } from "../../services/api/apiService";
import { useNavigate } from "react-router-dom";
import { GlobalStateService } from "../../services/globalStateService";
import { v4 as uuidv4 } from "uuid";
import { movieUseCases } from "../../useCases/moviesUseCases";

const filmDetailsFE: React.FC<IFilm> = ({
  title,
  description,
  imageUrl,
  posterUrl,
  genres,
  releaseDate,
  rated,
  id,
  source,
  runtime,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedLists, setSelectedLists] = useState<string[]>([]);
  const [messageApi, contextHolder] = message.useMessage();
  const [director, setDirector] = useState<any>(null);
  const [secondImportant, setSecondImportant] = useState<any>(null);
  const [trailerVisible, setTrailerVisible] = useState(false);
  const [listsVisible, setListsVisible] = useState(false);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [newListVisible, setNewListVisible] = useState(false);
  const [newListName, setNewListName] = useState("");
  const navigate = useNavigate();
  const [lists, setLists] = useState<IMovieList[]>([]);

  const convertRuntime = (minutes: number): string => {
    if (isNaN(minutes) || minutes < 0) return "N/A";
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  const handleNewListClose = () => setNewListVisible(false);
  const handleEditClick = () => navigate(`/edit/${id}`);
  const handleListsOpen = () => setListsVisible(true);
  const handleListsClose = () => setListsVisible(false);
  const handleTrailerClick = () => setTrailerVisible(true);
  const handleTrailerClose = () => setTrailerVisible(false);

  const handleAddToFavorites = () => {
    const favouriteFilm: IFavouriteFilm = {
      id,
      title,
      poster_path: posterUrl,
      source,
    };
    if (isFavorite) {
      JSONMovieUseCases.deleteFavouriteFilm(id);
      messageApi.open({
        type: "error",
        content: `${title} eliminada de favoritos`,
        duration: 2,
      });
      setIsFavorite(false);
    } else {
      messageApi.open({
        type: "success",
        content: `${title} añadida a favoritos`,
        duration: 2,
      });
      JSONMovieUseCases.addFavouriteFilm(favouriteFilm);
      setIsFavorite(true);
    }
  };

  useEffect(() => {
    const checkIfFavorite = async () => {
      const { isFav, listsContainingFilm } =
        await JSONMovieUseCases.checkIfFavoriteAndGetLists(id);
      setIsFavorite(isFav);
      setSelectedLists(listsContainingFilm);
    };
    checkIfFavorite();
  }, [id]);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const credits = await APIService.getMovieCredits(Number(id));
        const director = credits.crew.find(
          (member: any) => member.job === "Director"
        );
        const secondImportant = credits.crew.find(
          (member: any) => member.job !== "Director"
        );
        setDirector(director);
        setSecondImportant(secondImportant);
      } catch (error) {
        console.error("Error fetching credits:", error);
      }
    };
    fetchCredits();
  }, [id]);

  useEffect(() => {
    const fetchTrailer = async () => {
      const trailer = await movieUseCases.getTrailer(id);
      setTrailerKey(trailer);
    };
    fetchTrailer();
  }, [id]);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const fetchedLists = await JSONMovieUseCases.getLists();
        setLists(fetchedLists);
        GlobalStateService.setLists(fetchedLists);
      } catch (error) {
        console.error("Error fetching lists:", error);
      }
    };
    fetchLists();
  }, []);

  const handleCreateList = async () => {
    if (newListName.trim()) {
      try {
        const newList = {
          id: uuidv4(),
          name: newListName,
          poster_path: "",
          movies: [],
        };
        await JSONMovieUseCases.createList(newList);
        messageApi.open({
          type: "success",
          content: `Lista ${newListName} creada`,
          duration: 2,
        });
        setLists((prevLists) => [...prevLists, newList]);
        setNewListName("");
        setNewListVisible(false);
      } catch (error) {
        messageApi.open({
          type: "error",
          content: "Error al crear la lista",
          duration: 2,
        });
      }
    }
  };

  const defaultImage = import.meta.env.VITE_BACKGROUND_IMAGE;
  const validImageUrl =
    imageUrl && !imageUrl.endsWith("null") && !imageUrl.endsWith("undefined")
      ? imageUrl
      : defaultImage;

  const handleCheckboxChange = async (listId: string) => {
    setSelectedLists((prevSelected) => {
      const isSelected = prevSelected.includes(listId);
      const updatedSelectedLists = isSelected
        ? prevSelected.filter((id) => id !== listId)
        : [...prevSelected, listId];

      if (isSelected) {
        JSONMovieUseCases.removeFilmFromList(listId, {
          id,
          title,
          poster_path: posterUrl,
          source,
        });
      } else {
        JSONMovieUseCases.addFilmToList(listId, {
          id,
          title,
          poster_path: posterUrl,
          source,
        });
      }

      messageApi.open({
        type: "success",
        content: isSelected
          ? "Película eliminada de la lista"
          : "Película añadida a la lista",
        duration: 2,
      });
      return updatedSelectedLists;
    });
  };

  return (
    <div className={styles.film}>
      <img src={validImageUrl} alt={title} className={styles.filmImage} />
      <div className={styles.filmContent}>
        <img src={posterUrl} alt={title} className={styles.filmPoster} />

        <div className={styles.textContainer}>
          <div className={styles.flex}>
            <h1 className={styles.filmTitle}>{title}</h1>{" "}
            {source === "database" && (
              <button className={styles.btnEdit} onClick={handleEditClick}>
                <EditOutlined />
              </button>
            )}
          </div>
          <div className={styles.filmMore}>
            <p>{releaseDate}</p>
            <p>{convertRuntime(runtime)}</p>
            <p>{rated}/10 ★</p>
          </div>
          <div className={styles.categories}>
            {genres.map((category: IGenre) => (
              <button key={category.id} className={styles.categoryButton}>
                {category.name}
              </button>
            ))}
          </div>
          <h2 className={styles.filmDescription}>{description}</h2>
          <div>
            {contextHolder}
            <button className={styles.btnAction} onClick={handleAddToFavorites}>
              {isFavorite ? <HeartFilled /> : <HeartOutlined />}
            </button>
            <button className={styles.btnAction} onClick={handleListsOpen}>
              <UnorderedListOutlined />
            </button>
            <button className={styles.rating}>
              <Rate allowHalf defaultValue={2.5} />
            </button>
            <button className={styles.trailer} onClick={handleTrailerClick}>
              Ver trailer ➡
            </button>
          </div>
          <div className={styles.castPrincipal}>
            {director && (
              <div className={styles.dn}>
                <h4>{director.name}</h4>
                <h5>Director</h5>
              </div>
            )}
            {secondImportant && (
              <div className={styles.dn}>
                <h4>{secondImportant.name}</h4>
                <h5>{secondImportant.job}</h5>
              </div>
            )}
          </div>
        </div>
      </div>

      <Modal
        open={trailerVisible}
        footer={null}
        onCancel={handleTrailerClose}
        width={800}
      >
        {trailerKey && (
          <iframe
            width="100%"
            height="450"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title="Trailer"
            style={{ border: "none", padding: "0" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </Modal>
      <ConfigProvider
        theme={{
          components: {
            Modal: {
              colorBgContainer: "#242424",
              contentBg: "#242424",
            },
          },
        }}
      >
        <Modal
          open={listsVisible}
          footer={null}
          onCancel={handleListsClose}
          width={400}
          style={{ color: "#ffffff" }}
        >
          <div>
            <h2>Lista de peliculas</h2>
            {lists.map((list) => (
              <div key={list.id}>
                <Checkbox
                  checked={selectedLists.includes(list.id)}
                  onChange={() => handleCheckboxChange(list.id)}
                >
                  {list.name}
                </Checkbox>
              </div>
            ))}
            <button
              className={styles.btnAddList}
              onClick={() => setNewListVisible(true)}
            >
              + Crear nueva lista
            </button>
          </div>
        </Modal>

        <Modal
          open={newListVisible}
          footer={null}
          onCancel={handleNewListClose}
          width={400}
          style={{ color: "#ffffff" }}
        >
          <div>
            <h2>Crear nueva lista</h2>
            <Input
              placeholder="Nombre de la nueva lista"
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
            />
            <Button
              type="primary"
              onClick={handleCreateList}
              style={{ marginTop: "10px" }}
            >
              Crear
            </Button>
          </div>
        </Modal>
      </ConfigProvider>
    </div>
  );
};

export default filmDetailsFE;
