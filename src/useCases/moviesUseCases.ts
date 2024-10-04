import { APIService} from "../services/api/apiService"
import { GlobalStateService } from "../services/globalStateService"

/* Homepage */
async function getMovies(){
    try {
        const response = await APIService.GetMovies()
        GlobalStateService.setMovies(response.results.slice(0,16))
    } catch (error) {
        console.log(error)
    }
}
async function NowPlaying(){
    try {
        const response = await APIService.NowPlaying()
        GlobalStateService.setNow(response.results.slice(0,16))
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
        
        // Extract relevant details for FilmDetailsFE
        const filmData = {
            title: response.title,
            originalTitle: response.original_title,
            description: response.overview,
            imageUrl: `https://image.tmdb.org/t/p/original${response.backdrop_path}`,
            posterUrl: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${response.poster_path}`,
            categories: response.genres.map((genre: { name: string }) => genre.name),
            releaseDate: response.release_date,
            rated: response.vote_average,
            status: response.status,
            spokenLanguages: response.spoken_languages.map(
              (lang: { english_name: string }) => lang.english_name
            ),
            budget: response.budget,
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
        return null; // Return null in case of error
    }
}

async function getMovieCredits(movie_id: number){
    const response = await APIService.getMovieCredits(movie_id)
    GlobalStateService.setCredits(response.cast.slice(0,16))
}

async function getMovieRecommendations(movie_id: number){
    const response = await APIService.getMovieRecommendations(movie_id) 
    GlobalStateService.setRecommendations(response.results.slice(0,16))
}

async function getSearchFilm(query: string) {
    const response= await APIService.getSearchFilm(query)
    return response.results
}

export const movieUseCases = {
    getMovies,
    NowPlaying,
    filmDetails,
    getMovieCredits,
    getMovieRecommendations,
    getSearchFilm

} 

