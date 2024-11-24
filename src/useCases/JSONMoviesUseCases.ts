import { GlobalStateService } from "../services/globalStateService";
import { serverService } from "../services/server/serverService";
import { IFavouriteFilm, IFilm, IFilmForm, IGenre, IMovieList } from "../types";
import { v4 as uuidv4 } from 'uuid';

async function getFavourites(){
    try {
        const response = await serverService.getFavourites()
        const moviesMaped = response.map((movie: any)=> ({
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
            source: movie.source
        }))
        GlobalStateService.setFavourites(moviesMaped.slice(0,8))
        return moviesMaped;
    } catch (error) {
        console.log(error)
    }
}

async function getJSONMovies(){
    try {
        const response = await serverService.getJSONMovies()
        GlobalStateService.setJSONMovies(response)
    } catch (error) {
        console.log(error)
    }
}

async function getLists(){
    try {
        const response = await serverService.getLists()
        GlobalStateService.setLists(response)
        return response
    } catch (error) {
        console.log(error)
    }
}
async function createList(list: IMovieList){
    try {
        await serverService.createList(list)
    } catch (error) {
        console.log(error)
    }
}

async function addFilmToList(listID: string, film: any) {
    try {
        const lists = await serverService.getLists();
        const filmMapped = {
            id: film.id,
            title: film.title,
            poster_path: film.poster_path,
            source: film.source
        };
        await serverService.addFilmToList(listID, filmMapped);
        GlobalStateService.setListFilms(lists.find((l: any) => l.id === listID), filmMapped);
    } catch (error) {
        console.log(error);
    }
}

async function removeFilmFromList(listID: string, film: any) {
    try {
      const lists = await serverService.getLists();
      const list = lists.find((l: any) => l.id === listID);
      if (list) {
        const updatedMovies = list.movies.filter((m: any) => m.id !== film.id);
        await serverService.updateList(listID, { ...list, movies: updatedMovies });
        GlobalStateService.setListFilms(list, updatedMovies);
      }
    } catch (error) {
      console.log(error);
    }
  }





async function addFavouriteFilm(film: any){
    try{
        await serverService.addFavouriteFilm(film);
        const favourites = await serverService.getFavourites();
        const moviesMaped = favourites.map((movie: any) => ({
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
            source: movie.source
        }));
        GlobalStateService.setFavourites(moviesMaped);
    }
    catch (error){
        console.log(error)
    }
}
async function deleteFavouriteFilm(id: string){
    try {
        await serverService.deleteFavouriteFilm(id);
    } catch (error) {
        console.log(error)
    }
}

async function createFilm(film: IFilmForm){
    try {
        const genres = GlobalStateService.getGenresOutsideComponent();
        const mapGenres= new Map(genres.map((g) => [g.id , g]));
        
        const id = uuidv4()
        const filmObj: IFilm = {
            ...film,
             id,
            genres: film.genres.map((g: IGenre) => {
                const value = mapGenres.get(g);
                return {
                    id: value.id,
                    name: value.name
                }
            }),
        }
        await serverService.createFilm(filmObj)
        return filmObj;
    }catch (error) {
        console.log(error)
    }
}
async function getListFilms(listID: string){
    try {
        const response = await serverService.getListFilms(listID);
        return response;
    } catch (error) {
        console.log(error);
    }
}
async function movieDetails(movie_id: string ) {
    try {
        const response = await serverService.getMovieDetails(movie_id);

        const filmData: IFilm = {
            id: response.id,
            title: response.title,
            originalTitle: response.original_title,
            description: response.description,
            imageUrl: response.imageUrl,
            posterUrl: response.posterUrl,
            genres: response.genres,
            releaseDate: response.releaseDate,
            rated: response.rated,
            status: response.status,
            budget: response.budget,
            runtime: response.runtime,
            source: "database",
            spokenLanguages: [],
            videos: [],
            images: [],
            posters: [],
            revenue: 0,
        };
        return GlobalStateService.setFilmDetails(filmData);
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function checkIfFavoriteAndGetLists(filmId: string) {
    try {
      const favorites = await getFavourites();
      const isFav = favorites.some((film: IFavouriteFilm) => film.id === filmId);
  
      const lists = await getLists();
      const listsContainingFilm = lists
        .filter((list: any) => list.movies.some((movie: any) => movie.id === filmId))
        .map((list: any) => list.id);
  
      return { isFav, listsContainingFilm };
    } catch (error) {
      console.error("Error checking favorites and lists:", error);
      throw error;
    }
  }



export const JSONMovieUseCases = {
    getFavourites,
    addFavouriteFilm,
    deleteFavouriteFilm,
    createFilm,
    getJSONMovies,
    movieDetails,
    getLists,
    createList,
    addFilmToList,
    getListFilms,
    removeFilmFromList,
    checkIfFavoriteAndGetLists
    
}
