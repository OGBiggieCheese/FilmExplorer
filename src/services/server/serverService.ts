import { IFilm } from "../../types";
import { serverAxiosInstance } from "./serverAxiosInstance";

/* DATABASE */
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
async function createFilm(film: IFilm){
    try {
        await serverAxiosInstance.post("/userMovies/", film)
    } catch (error) {
        console.log(error)
    }
}


export const serverService = {
    getFavourites,
    addFavouriteFilm,
    deleteFavouriteFilm,
    createFilm
};