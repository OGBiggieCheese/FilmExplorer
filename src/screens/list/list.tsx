import { useEffect, useState } from "react";
import Card from "../../components/card";
import "./list.scss";
import { JSONMovieUseCases } from "../../useCases/JSONMoviesUseCases";
import { useParams } from "react-router-dom";
import { GlobalStateService } from "../../services/globalStateService";
import { IList } from "../../types";

export default function List() {
  const [listFilms, setListFilms] = useState([]);
  const [list, setList] = useState<any>(null);
  const { listID } = useParams<{ listID: string }>();
  const lists = GlobalStateService.getLists();

  useEffect(() => {
    JSONMovieUseCases.getLists();
    const lista = lists.find((list: IList) => list.id === listID);
    setList(lista);
    JSONMovieUseCases.getListFilms(listID || "").then((films) => {
      setListFilms(films.movies);
    });
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
