import "./film.scss";
import FilmDetailsFE from "../../components/filmDetails";
import Cast from "../../components/cast";
import Slider from "../../components/slider";
import Multimedia from "../../components/multimedia";
import Card from "../../components/card";
import { movieUseCases } from "../../useCases/moviesUseCases";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalStateService } from "../../services/globalStateService";
import Loader from "../../components/loader/loader";
import { JSONMovieUseCases } from "../../useCases/JSONMoviesUseCases";

function Film() {
  const { filmID, source } = useParams<{ filmID: string; source: string }>();
  const [loading, setLoading] = useState(true);

  const recommendations = GlobalStateService.getRecommendations();
  const credits = GlobalStateService.getCredits();
  const filmDetails = GlobalStateService.getFilmDetails();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (source === "api") {
        await JSONMovieUseCases.getFavourites();
        await movieUseCases.filmDetails(Number(filmID));
        await movieUseCases.getMovieCredits(Number(filmID));
        await movieUseCases.getMovieRecommendations(Number(filmID));
      } else if (source === "database") {
        await JSONMovieUseCases.movieDetails(String(filmID));
      }
      setLoading(false);
    };

    fetchData();
  }, [filmID, source]);

  if (loading) {
    return <Loader />;
  }
  if (!filmDetails) return <div>Nada que ver aca</div>;

  const filmProps = {
    ...filmDetails,
    id: filmID!,
    source: filmDetails.source,
    status: "",
    spokenLanguages: [],
    videos: filmDetails.videos,
    images: filmDetails.images,
    posters: filmDetails.posters,
  };

  return (
    <>
      <FilmDetailsFE {...filmProps} />
      {source === "api" && (
        <div className="flex">
          <div className="principalInfo">
            <section>
              <Slider title="Cast principal">
                {credits.map((credit) => (
                  <Cast
                    key={credit.id}
                    title={credit.name}
                    voice={credit.character}
                    imageUrl={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${credit.profile_path}`}
                  />
                ))}
              </Slider>
            </section>

            <section>
              <Slider title="Multimedia">
                <Multimedia
                  videos={filmDetails.videos.slice(0, 4)}
                  images={filmDetails.images.slice(0, 8)}
                  posters={filmDetails.posters.slice(0, 12)}
                />
              </Slider>
            </section>

            <section>
              <Slider title="Recomendados">
                {recommendations.map((recommendation) => (
                  <Card
                    key={recommendation.id}
                    id={recommendation.id}
                    title={recommendation.title}
                    poster_path={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${recommendation.poster_path}`}
                    source={recommendation.source}
                    showButton={true}
                  />
                ))}
              </Slider>
            </section>
          </div>

          <div className="moreInfo">
            <h4>Titulo original</h4>
            <p>{filmDetails.originalTitle}</p>
            <h4>Estado</h4>
            <p>{filmDetails.status}</p>
            <h4>Idioma original</h4>
            <p>{filmDetails.spokenLanguages.join(", ")}</p>
            <h4>Presupuesto</h4>
            <p>{filmDetails.budget.toLocaleString("es-ES")}</p>
            <h4>Ingresos</h4>
            <p>{filmDetails.revenue.toLocaleString("es-ES")}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Film;
