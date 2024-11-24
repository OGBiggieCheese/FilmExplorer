import "./profile.scss";
import Slider from "../../components/slider";
import Card from "../../components/card";
import List from "../../components/list";
import { useEffect } from "react";
import { GlobalStateService } from "../../services/globalStateService";
import { JSONMovieUseCases } from "../../useCases/JSONMoviesUseCases";

function Profile() {
  const favourites = GlobalStateService.getFavourites();
  const lists = GlobalStateService.getLists();

  useEffect(() => {
    JSONMovieUseCases.getFavourites();
    JSONMovieUseCases.getLists();
  }, []);

  return (
    <>
      <section className="welcome">
        <img
          className="profile"
          src="https://media.admagazine.com/photos/637d11a6e63c8afac40e7a01/1:1/w_2896,h_2896,c_limit/1442809583"
        ></img>
        <h3>
          Bievenido de nuevo <span>Messi</span>. ¿Qué nueva aventura veremos
          hoy?
        </h3>
      </section>
      <section>
        <Slider title="Favoritos">
          {favourites.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              source={movie.source}
            />
          ))}
        </Slider>
      </section>
      <section>
        <Slider title="Listas">
          {lists.map((list) => (
            <List
              key={list.id}
              id={list.id}
              title={list.name}
              movies={list.movies}
            />
          ))}
        </Slider>
      </section>
    </>
  );
}

export default Profile;
