import { axiosInstance } from "./axiosInstance"

async function GetMovies(){
    try {
      /*   const response = await axiosInstance.get("/movie")
        return response.data */
        const {data} = await axiosInstance.get("/movie/popular?page=1&language=es-ES")
        return data
    } catch (error) {
        console.log(error)
        return error
    }
  }
async function NowPlaying(){
    try {
        const {data} = await axiosInstance.get("/movie/now_playing?language=es-ES&page=1&region=ar")
        return data
    } catch (error) {
        console.log(error)
        return error
    }
  }
async function getMovieDetails(movie_id: number) {
    try {
        const { data } = await axiosInstance.get(`/movie/${movie_id}?language=es-ES`);
        console.log(data.genres)
        console.log(data)
        return data; 
        
    } catch (error) {
        console.log(error); 
        return error; 
    }
  }
async function getMovieCredits(movie_id: number){
    try {
        const { data } = await axiosInstance.get(`/movie/${movie_id}/credits?language=es-ES`);
        return data; 

    } catch (error) {
        console.log(error); 
        return error; 
    }
  }
async function getMovieRecommendations(movie_id: number){
    try {
        const { data } = await axiosInstance.get(`/movie/${movie_id}/recommendations?language=es-ES&page=1`);
        return data; 
    } catch (error) {
        console.log(error); 
        return error; 
    }
  }
async function getFilmVideos(movie_id: number){
    try {
        const { data } = await axiosInstance.get(`/movie/${movie_id}/videos?language=es-ES`);
        return data; 
    } catch (error) {
        console.log(error); 
        return error; 
    }
  }
async function getFilmImages(movie_id: number){
    try {
        const { data } = await axiosInstance.get(`/movie/${movie_id}/images`);
        return data; 
    } catch (error) {
        console.log(error); 
        return error; 
    }
  }
async function getSearchFilm(query: string){
    try {
        const { data } = await axiosInstance.get(`/search/movie?query=${query}&include_adult=true&language=es-ES&page=1`);
        return data; 
    } catch (error) {
        console.log(error); 
        return error; 
    }
  }

export const APIService = {
    GetMovies,
    NowPlaying,
    getMovieDetails,
    getMovieCredits,
    getMovieRecommendations,
    getFilmVideos,
    getFilmImages,
    getSearchFilm,
};