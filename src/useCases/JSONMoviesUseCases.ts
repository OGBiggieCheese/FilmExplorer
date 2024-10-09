import { GlobalStateService } from "../services/globalStateService";
import { serverService } from "../services/server/serverService";
import { IFilm } from "../types";
import { v4 as uuidv4 } from 'uuid';

async function getFavourites(){
    try {
        const response = await serverService.getFavourites()
        GlobalStateService.setFavourites(response.slice(0,8))
        return response
    } catch (error) {
        console.log(error)
    }
}
async function addFavouriteFilm(film: any){
    try{
        await serverService.addFavouriteFilm(film);
        const favourites = await serverService.getFavourites();
        GlobalStateService.setFavourites(favourites);
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

async function createFilm(film: IFilm){
    try {
        const id = uuidv4()
        const filmObj = {
            ...film, id
        }
        await serverService.createFilm(filmObj)
    } catch (error) {
        console.log(error)
    }
}

export const JSONMovieUseCases = {
    getFavourites,
    addFavouriteFilm,
    deleteFavouriteFilm,
    createFilm
}