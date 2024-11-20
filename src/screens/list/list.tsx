import { useEffect, useState } from "react";
import Card from "../../components/card";
import "./list.scss";
import { JSONMovieUseCases } from "../../useCases/JSONMoviesUseCases";
import { useParams } from "react-router-dom";
import { serverService } from "../../services/server/serverService";

export default function List() {
  const [listFilms, setListFilms] = useState([]);
  const [list, setList] = useState<any>(null);
  const { listID } = useParams<{ listID: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const films = await JSONMovieUseCases.getListFilms(listID || "");
        const lists = await serverService.getLists();
        const lista = lists.find((list: any) => list.id === listID);
        setList(lista);
        setListFilms(films.movies || []);
      } catch (error) {
        console.error("Error fetching list films:", error);
      }
    };

    fetchData();
  }, [listID]);

  return (
    <div className="list">
      <h1>{list?.name}</h1>
      <div className="listFilms">
        {listFilms.map(
          (film: {
            id: number;
            title: string;
            poster_path: string;
            source: "database" | "api";
          }) => (
            <Card
              key={film.id}
              id={film.id}
              title={film.title}
              poster_path={film.poster_path}
              source={film.source}
            />
          )
        )}
      </div>
    </div>
  );
}
