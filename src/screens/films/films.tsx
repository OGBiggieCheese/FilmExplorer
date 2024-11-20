import "./films.scss";
import { GlobalStateService } from "../../services/globalStateService";
import { movieUseCases } from "../../useCases/moviesUseCases";
import { DatePicker, Select } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../../components/card";
import Loader from "../../components/loader/loader";
import { useEffect } from "react";
import { JSONMovieUseCases } from "../../useCases/JSONMoviesUseCases";
import { IGenre } from "../../types";

export default function Films() {
  const filters = GlobalStateService.getFilters();
  const page = GlobalStateService.getPageNumber();
  const apiMovies = GlobalStateService.getMoviesList();
  const dbMovies = GlobalStateService.getJSONMovies();
  const genres = GlobalStateService.getGenres();

  const changeSource = (value: string) => {
    GlobalStateService.setFilters({ ...filters, source: value });
    refreshMovies();
  };

  const getMovies = () => {
    if (filters.source === "api") {
      console.log("SE DISPARO GET MOVIES API");
      return apiMovies;
    } else {
      let filteredMovies = [...dbMovies];
      if (filters.selectedGenres.length > 0) {
        filteredMovies = filteredMovies.filter((movie) =>
          movie.genres.some((genre: IGenre) =>
            filters.selectedGenres.includes(genre.id)
          )
        );
      }
      if (filters.sortOrder) {
        filteredMovies.sort((a, b) => {
          switch (filters.sortOrder) {
            case "title.asc":
              return a.title.localeCompare(b.title);
            case "title.desc":
              return b.title.localeCompare(a.title);
            case "primary_release_date.asc":
              return (
                new Date(b.releaseDate).getTime() -
                new Date(a.releaseDate).getTime()
              );
            case "old":
              return (
                new Date(a.releaseDate).getTime() -
                new Date(b.releaseDate).getTime()
              );
            default:
              return 0;
          }
        });
      }
      return filteredMovies;
    }
  };

  useEffect(() => {
    movieUseCases.getGenres();
  }, []);

  const refreshMovies = () => {
    GlobalStateService.clearMovies();
    if (filters.source === "api") {
      movieUseCases.GetMoviesList(
        page,
        filters.sortOrder,
        filters.selectedGenres
      );
    } else {
      JSONMovieUseCases.getJSONMovies();
    }
  };

  useEffect(() => {
    refreshMovies();
  }, [filters]);

  return (
    <div className="filmsContainer">
      <div className="filters">
        <h2>Films</h2>
        <h4>Ordenar</h4>
        <Select
          onChange={(value) =>
            GlobalStateService.setFilters({
              ...filters,
              sortOrder: value,
            })
          }
          placeholder="Ordenar"
          style={{ marginLeft: "20px", marginTop: "0px", width: "80%" }}
          options={[
            { value: "title.asc", label: "Titulo (A-Z)" },
            { value: "title.desc", label: "Titulo (Z-A)" },
            {
              value: "primary_release_date.desc",
              label: "Fecha de estreno reciente",
            },
            {
              value: "primary_release_date.asc",
              label: "Fecha de estreno vieja",
            },
            { value: "vote_average.desc", label: "Mejor valorada" },
            { value: "vote_average.asc", label: "Peor valorada" },
          ]}
        ></Select>
        <h4>Origen</h4>
        <Select
          placeholder="Origen"
          style={{ marginLeft: "20px", marginTop: "0px", width: "80%" }}
          onChange={changeSource}
          defaultValue={"api"}
          options={[
            { value: "api", label: "Solo Api" },
            { value: "database", label: "Solo Database" },
          ]}
        ></Select>
        <h4>Generos</h4>
        <Select
          mode="multiple"
          placeholder="Generos"
          onChange={(value) => GlobalStateService.setSelectedGenres(value)}
          style={{ marginLeft: "20px", marginTop: "0px", width: "80%" }}
          options={genres.map((g) => ({ label: g.name, value: g.id }))}
          optionFilterProp="label"
          optionRender={(option) => {
            return <div>{option.label}</div>;
          }}
          allowClear
        ></Select>
        <h4>Fecha de estreno</h4>
        <DatePicker
          placeholder="Desde"
          style={{ marginLeft: "20px", marginTop: "0px", width: "80%" }}
        ></DatePicker>
        <DatePicker
          placeholder="Hasta"
          style={{ marginLeft: "20px", marginTop: "8px", width: "80%" }}
        ></DatePicker>
        <button onClick={refreshMovies}> Filtrar </button>
      </div>
      <div className="films">
        <InfiniteScroll
          className="filmsList"
          style={{ overflowY: "hidden" }}
          dataLength={getMovies().length}
          next={() => {
            const nextPage = page + 1;
            if (filters.source === "api") {
              movieUseCases.GetMoviesList(
                nextPage,
                filters.sortOrder,
                filters.selectedGenres
              );
            } else if (filters.source === "database") {
              JSONMovieUseCases.getJSONMovies();
            }
            GlobalStateService.setPage(nextPage);
          }}
          hasMore={getMovies().length >= 20}
          loader={<Loader />}
        >
          {getMovies().map((movie) => (
            <Card
              id={movie.id}
              title={movie.title}
              poster_path={
                movie.source === "database"
                  ? movie.posterUrl
                  : `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`
              }
              source={movie.source}
              showButton={true}
            />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}
