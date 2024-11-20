import { APIService} from "../services/api/apiService"
import { GlobalStateService } from "../services/globalStateService"
import { ICard, IFilm } from "../types"

/* Homepage */
async function getMovies(){
    try {
        const response = await APIService.GetMovies()
        const moviesMaped = response.results.map((movie: any)=> ({
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
            source: "api"
        }))
        GlobalStateService.setMovies(moviesMaped.slice(0,16))
    } catch (error) {
        console.log(error)
    }
}

async function NowPlaying(){
    try {
        const response = await APIService.NowPlaying()
        const moviesMaped = response.results.map((movie: any)=> ({
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
            source: "api"
        }))
        GlobalStateService.setNow(moviesMaped.slice(0,16))
    } catch (error) {
        console.log(error)
    }
}


/* Film */
async function filmDetails(movie_id: number) {
    try {
        const videosResponse = await APIService.getFilmVideos(movie_id);
        const imagesResponse = await APIService.getFilmImages(movie_id);
        const response = await APIService.getMovieDetails(movie_id);

        const filmData: IFilm = {
            id: response.id,
            title: response.title,
            originalTitle: response.original_title,
            description: response.overview,
            imageUrl: `https://image.tmdb.org/t/p/original${response.backdrop_path}`,
            posterUrl: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${response.poster_path}`,
            genres: response.genres,
            releaseDate: response.release_date,
            rated: response.vote_average,
            status: response.status,
            budget: response.budget,
            revenue: response.revenue,
            runtime: response.runtime,
            source: "api",
            spokenLanguages: response.spoken_languages.map(
              (lang: { english_name: string }) => lang.english_name
            ),
            videos: videosResponse.results.map((video: { key: string }) => ({
              key: video.key,
              src: video.key,
            })),
            images: imagesResponse.backdrops.map((image: { file_path: string }) => ({
              key: image.file_path,
              src: `https://image.tmdb.org/t/p/original${image.file_path}`,
            })),
            posters: imagesResponse.posters.map((poster: { file_path: string }) => ({
              key: poster.file_path,
              src: `https://image.tmdb.org/t/p/w220_and_h330_bestv2${poster.file_path}`,
            })),
        };
        return GlobalStateService.setFilmDetails(filmData);
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function getMovieCredits(movie_id: number){
    const response = await APIService.getMovieCredits(movie_id)
    GlobalStateService.setCredits(response.cast.slice(0,16))
}

async function getMovieRecommendations(movie_id: number){
    const response = await APIService.getMovieRecommendations(movie_id) 
    const moviesMaped = response.results.map((movie: any)=> ({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        source: "api"
    }))
    GlobalStateService.setRecommendations(moviesMaped.slice(0,16))
}

async function getSearchFilm(query: string) {
    const response= await APIService.getSearchFilm(query)
    const moviesMaped = response.results.map((movie: ICard)=> ({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        source: "api"
    }))
    GlobalStateService.setSearch(moviesMaped)
}
async function getGenres(){
    try {
        const response = await APIService.getGenres()
        GlobalStateService.setGenres(response.genres)
    } catch (error) {
        console.log(error)
    }
}


async function GetMoviesList(page: number, sortOrder: string, selectedGenres: string[]) {
    try {
        const response = await APIService.GetMoviesList(page, sortOrder, selectedGenres);
        console.log("RESPONSE DE GETMOVIESLIST EN MOVIEUSECASES TIENE", response);
        const moviesMaped = response.results.map((movie: ICard) => ({
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
            source: "api"
        }));
        GlobalStateService.setMoviesList(moviesMaped);
        
    } catch (error) {
        console.log(error);
    }
}

async function getTrailer(movie_id: string){
      try {
        const videos = await APIService.getFilmVideos(Number(movie_id));
        const trailer = videos.results.find(
          (video: any) => video.type === "Trailer"
        );
        if (trailer) {
          return trailer.key;
        }
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
}


export const movieUseCases = {
    getMovies,
    NowPlaying,
    filmDetails,
    getMovieCredits,
    getMovieRecommendations,
    getSearchFilm,
    getGenres,
    GetMoviesList,
    getTrailer
} 

