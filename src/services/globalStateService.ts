import create from 'zustand';

interface IGlobalState{
    movies:any[];
    now:any[]
    film:any
    credits:any[]
    recommendations:any[]
}

const initialStoreData: IGlobalState = {
    movies:[],
    now:[],
    film: null,
    credits:[],
    recommendations:[]
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
function setMovies(movies: any[]){
    globalState.setState((prev) => {
        return {
            ...prev,
            movies
        }
    } )
}
function setNow(now: any[]){
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
function setFilmDetails(film: any){
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
    setRecommendations

}
