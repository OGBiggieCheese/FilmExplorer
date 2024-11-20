import { axiosInstance } from "./axiosInstance"

async function GetMovies(){
    try {
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
async function getGenres(){
    try {
       const { data } = await axiosInstance.get(`genre/movie/list?language=es`);
        return data;  
    } catch (error) {
        console.log(error); 
        return error; 
    }
}

async function GetMoviesList(page: number, sortOrder: string, selectedGenres: string[]) {
    try {
        const params = {
            page,
            language: "es-ES",
            sort_by: sortOrder || "popularity.desc",
            with_genres: selectedGenres.join(','),
        };
        console.log("SE EJECUTA GETMOVIESLIST EN APISERVICECON PARAMS:", params);
        const { data } = await axiosInstance.get('/discover/movie?include_adult=false', { params });
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
    getGenres,
    GetMoviesList,
    
};