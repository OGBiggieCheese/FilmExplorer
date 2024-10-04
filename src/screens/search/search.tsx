import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { movieUseCases } from "../../useCases/moviesUseCases";
import Card from "../../components/card";
import Slider from "../../components/slider";
import { GlobalStateService } from "../../services/globalStateService";
import "./search.scss";
import Loader from "../../components/loader/loader";

export default function Search() {
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const results = GlobalStateService.getSearch();

  useEffect(() => {
    setLoading(true);
    if (query) {
      movieUseCases.getSearchFilm(query);
    }
    setLoading(false);
  }, [query]);

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="results">
      <Slider title={`Resultados para ${query}`}>
        {results.map((movie: any) => (
          <Card
            key={movie.id}
            id={movie.id}
            title={movie.title}
            imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        ))}
      </Slider>
    </div>
  );
}
