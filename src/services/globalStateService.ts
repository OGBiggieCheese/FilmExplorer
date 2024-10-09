import create from 'zustand';
import { ICard, IFilm } from '../types';

interface IGlobalState{
    movies:any[];
    now:any[]
    film:any
    credits:any[]
    recommendations:any[]
    search:any[]
    favourites: any[]
}

const initialStoreData: IGlobalState = {
    movies:[],
    now:[],
    film: null,
    credits:[],
    recommendations:[],
    search:[],
    favourites:[],
}

const globalState = create(() => initialStoreData);

/* Homepage */
function getMovies(){
    return globalState((state) => state.movies)
}
function getNow(){
    return globalState((state) => state.now)
}

/* function getMoviesOutSideComponent(){
    return globalState.getState().movies
}
 */
function setMovies(movies: ICard[]){
    globalState.setState((prev) => {
        return {
            ...prev,
            movies
        }
    } )
}
function setNow(now: ICard[]){
    globalState.setState((prev) => {
        return {
            ...prev,
            now
        }
    } )
}

/* Film */
function getFilmDetails(){
   return globalState((state) => state.film)
}
function setFilmDetails(film: IFilm){
    globalState.setState((prev) => {
        return {
            ...prev,
            film
        }
    } )
}
function getCredits(){
    return globalState((state) => state.credits)
}
function setCredits(credits: any[]){
    globalState.setState((prev) => {
        return{
            ...prev,
            credits
        }
    })
}
function getRecommendations(){
    return globalState((state) => state.recommendations)
}
function setRecommendations(recommendations: any[]){
    globalState.setState((prev) => {
        return{
            ...prev,
            recommendations
        }
    })
}
function getSearch(){
    return globalState((state) => state.search)
}
function setSearch(search: any[]){
    globalState.setState((prev) => {
        return{
            ...prev,
            search
        }
    })
}

function getFavourites(){
    return globalState((state) => state.favourites)
}
function setFavourites(favourites: any[]){
    globalState.setState((prev) => {
        return {
            ...prev,
            favourites
        }
    } )
}








export const GlobalStateService = {
    getMovies,
    setMovies,
    setNow,
    getNow,
    getFilmDetails,
    setFilmDetails,
    getCredits,
    setCredits,
    getRecommendations,
    setRecommendations,
    getSearch,
    setSearch,
    getFavourites,
    setFavourites,

}
