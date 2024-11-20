import { IFilm, IFilmForm, IMovieList } from "../../types";
import { serverAxiosInstance } from "./serverAxiosInstance";

/* Favorites - film.tsx & profile.tsx */
async function getFavourites(){
    try{
        const {data} = await serverAxiosInstance.get("/favMovies");
        return data; 
    }
    catch(error){
        console.log(error);
        return error;
    }
}
async function addFavouriteFilm(film: any) {
    try {
        await serverAxiosInstance.post("/favMovies", film); 
    } catch (error) {
        console.log(error); 
        return error; 
    }
}

async function deleteFavouriteFilm(id: string){
    try {
        await serverAxiosInstance.delete(`/favMovies/${id}`);
    } catch (error) {
        console.log(error)
    }
}


/* Create.tsx */
async function createFilm(film: IFilm){
    try {
        await serverAxiosInstance.post("/userMovies/", film)
    } catch (error) {
        console.log(error)
    }
}


/* Films.tsx */
async function getJSONMovies(){
    try {
        const {data} = await serverAxiosInstance.get("/userMovies");
        return data; 
    } catch (error) {
        console.log(error)
    }
}


/* film.tsx */
async function getMovieDetails(movie_id: string){
    try {
        const {data} = await serverAxiosInstance.get(`/userMovies/${movie_id}`)
        return data
    } catch (error) {
        console.log(error)
    }
}
async function getListFilms(listID: string){
    try {
        const {data} = await serverAxiosInstance.get(`/userLists/${listID}`)
        return data
    } catch (error) {
        console.log(error)
    }
}
async function updateFilm(id: string, film: IFilmForm){
    try {
        await serverAxiosInstance.put(`/userMovies/${id}`, film)
    } catch (error) {
        console.log(error)
    }
}
async function getLists(){
    try{
        const {data} = await serverAxiosInstance.get("/userLists");
        return data; 
    }
    catch(error){
        console.log(error);
        return error;
    }
}
async function createList(list: IMovieList){
    try {
        await serverAxiosInstance.post("/userLists", list)
    } catch (error) {
        console.log(error)
    }
}
async function addFilmToList(listID: string, film: any) {
    try {
        const { data: list } = await serverAxiosInstance.get(`/userLists/${listID}`);
        const updatedMovies = [...list.movies, film];
        await serverAxiosInstance.put(`/userLists/${listID}`, {
            ...list,
            movies: updatedMovies
        });
    } catch (error) {
        console.log(error);
    }
}
async function updateList(listID: string, updatedList: any) {
    try {
        await serverAxiosInstance.put(`/userLists/${listID}`, updatedList);
    } catch (error) {
        console.log(error);
    }
}

export const serverService = {
    getFavourites,
    addFavouriteFilm,
    deleteFavouriteFilm,
    createFilm,
    getJSONMovies,
    getMovieDetails,
    updateFilm,
    getLists,
    createList,
    addFilmToList,
    getListFilms,
    updateList
};