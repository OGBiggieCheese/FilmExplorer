import create from 'zustand';
import { ICard, IFilm, IList, IMovieList } from '../types';

interface IGlobalState{
    movies: ICard[];
    now: ICard[]
    film: IFilm
    credits: any[]
    recommendations: ICard[]
    search: ICard[]
    favourites: ICard[]
    jsonMovies: ICard[]
    genres: any[]
    page: number
    lists: IMovieList[]
    listFilms: any[]
    filters: any
}
const initialStoreData: IGlobalState = {
    movies:[],
    now:[],
    film: {} as IFilm,
    credits:[],
    recommendations:[],
    search:[],
    favourites:[],
    jsonMovies:[],
    genres:[],
    page:1,
    lists:[],
    listFilms:[],
    filters: {source: "api", sortOrder: "", selectedGenres: []}
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
}*/
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
function setRecommendations(recommendations: ICard[]){
    globalState.setState((prev) => {
        return{
            ...prev,
            recommendations
        }
    })
}
function getFavourites(){
    return globalState((state) => state.favourites)
}
function setFavourites(favourites: ICard[]){
    globalState.setState((prev) => {
        return {
            ...prev,
            favourites
        }
    } )
}


/* Search */
function getSearch(){
    return globalState((state) => state.search)
}
function setSearch(search: ICard[]){
    globalState.setState((prev) => {
        return{
            ...prev,
            search
        }
    })
}


/* JSON */
function getJSONMovies(){
    return globalState((state) => state.jsonMovies)
}
function setJSONMovies(jsonMovies: ICard[]){
    globalState.setState((prev) => {
        return {
            ...prev,
            jsonMovies
        }
    } )
}


/* films.tsx & create.tsx */
function getGenres(){
    return globalState((state) => state.genres) 
}
function setGenres(genres: any[]){
    globalState.setState((prev) => {
        return{
            ...prev,
            genres
        }
    })
}
function getGenresOutsideComponent(){
    return globalState.getState().genres
}
function getMoviesList(){

    return globalState((state) => state.movies)
}
function setMoviesList(movies: any[]){
    globalState.setState((prev) => {
        console.log("SE DISPARO SET MOVIES LIST VALOR PREV", prev);
        return {
            ...prev,
            movies:[...prev.movies, ...movies]
        }
    } )
}
function getFilters(){
    return globalState((state) => state.filters)
}
function setFilters(filters: any){
    globalState.setState((prev) => ({...prev, filters}))
}
function setSource(source: string){
    globalState.setState((prev) => ( {...prev, filters: {...prev.filters, source}}))
}
function setSelectedGenres(selectedGenres: string[]){
    globalState.setState((prev) => ({...prev, filters: {...prev.filters, selectedGenres}}))
}
function setSortOrder(sortOrder: string){
    globalState.setState((prev) => ({...prev, filters: {...prev.filters, sortOrder}}))
}
function getPageNumber(){
    return globalState((state) => state.page)
}
function setPage(page: number){
    globalState.setState((prev) => {
        console.log("PAGINA", prev)
        return {
            ...prev,
            page 
            
        }   
    } )
}
function getLists(){
    return globalState((state) => state.lists)
}
function setLists(lists: any[]){
    globalState.setState((prev) => {
        return{
            ...prev,
            lists
        }
    })
}
function getListFilms(){
    return globalState((state) => state.listFilms)
}
function setListFilms(list: IList, film: any) {
    globalState.setState((prev) => {
        const updatedLists = prev.lists.map((l) => {
            if (l.id === list.id) {
                return {
                    ...l,
                    movies: [...l.movies, film]
                };
            }
            return l;
        });
        return {
            ...prev,
            lists: updatedLists
        };
    });
}

function clearMovies() {
    globalState.setState((prev) => ({
        ...prev,
        movies: []
    }));
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
    getJSONMovies,
    setJSONMovies,
    getGenres,
    setGenres,
    getGenresOutsideComponent,
    getMoviesList,
    setMoviesList,
    getPageNumber,
    setPage,
    clearMovies,
    getLists,
    setLists,
    setListFilms,
    getListFilms,
    getFilters,
    setFilters,
    setSource,
    setSelectedGenres,
    setSortOrder


}
