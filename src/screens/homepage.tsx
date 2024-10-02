import Card from "../components/card";
import Hero from "../components/hero";
import { Carousel } from "antd";
import "./homepage.scss";
import Category from "../components/categories";
import Slider from "../components/slider";
import { movieUseCases } from "../useCases/moviesUseCases";
import { useEffect } from "react";
import { GlobalStateService } from "../services/globalStateService";

function Homepage() {
  const now = GlobalStateService.getNow();
  const movies = GlobalStateService.getMovies();

  useEffect(() => {
    movieUseCases.getMovies();
    movieUseCases.NowPlaying();
  }, []);

  return (
    <>
      <section className="featured">
        <Carousel autoplay>
          <Hero
            title="El señor de los anillos: Los anillos de poder"
            imageUrl="https://image.tmdb.org/t/p/original/vpc8qVhFvu0SM4USg72bHPRmOPL.jpg"
            posterUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/suvlZfDAoq5vfVUrfb468KJhFlL.jpg"
            subtitle="Viaje a la Tierra Media"
          />
          <Hero
            title="Los simpsons"
            imageUrl="https://image.tmdb.org/t/p/original/pxeqQX4qFQ0cVxPt5SWZENV5BH3.jpg"
            posterUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/vH0Mghb0lNJ5k7EpDwI7iJV7qaO.jpg"
            subtitle="En sus puestos, listos, ¡ouch!"
          />
          <Hero
            title="Garfield: La película"
            imageUrl="https://image.tmdb.org/t/p/original/1wP1phHo2CROOqzv7Azs0MT5esU.jpg"
            posterUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/6QR2FOCQr41gSduN70WulRIhJb7.jpg"
            subtitle="Agárrate a tu asiento"
          />
          <Hero
            title="El reino del planeta de los simios"
            imageUrl="https://image.tmdb.org/t/p/original/fqv8v6AycXKsivp1T5yKtLbGXce.jpg"
            posterUrl="https://image.tmdb.org/t/p/original/kkFn3KM47Qq4Wjhd8GuFfe3LX27.jpg"
            subtitle="No one can stop the reign."
          />
        </Carousel>
      </section>

      <section>
        <Slider title="Lo mas popular">
          {movies.map((movie) => (
            <Card
              id={movie.id}
              title={movie.title}
              imageUrl={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
            />
          ))}
        </Slider>
      </section>

      <section>
        <Slider title="En cartelera">
          {now.map((now) => (
            <Card
              id={now.id}
              title={now.title}
              imageUrl={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${now.poster_path}`}
            />
          ))}
        </Slider>
      </section>

      <section>
        <Slider title="Categorias">
          <Category
            title="Acción"
            imageUrl="https://image.tmdb.org/t/p/original/9l1eZiJHmhr5jIlthMdJN5WYoff.jpg"
          />
          <Category
            title="Animación"
            imageUrl="https://media.themoviedb.org/t/p/w533_and_h300_bestv2/lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg"
          />
          <Category
            title="Comedia"
            imageUrl="https://media.themoviedb.org/t/p/w533_and_h300_bestv2/1wP1phHo2CROOqzv7Azs0MT5esU.jpg"
          />
          <Category
            title="Terror"
            imageUrl="https://image.tmdb.org/t/p/original/Asg2UUwipAdE87MxtJy7SQo08XI.jpg"
          />
          <Category
            title="Western"
            imageUrl="https://image.tmdb.org/t/p/original/x4biAVdPVCghBlsVIzB6NmbghIz.jpg"
          />
        </Slider>
      </section>
    </>
  );
}

export default Homepage;
