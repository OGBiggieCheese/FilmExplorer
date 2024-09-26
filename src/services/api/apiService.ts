import { axiosInstance } from "./axiosInstance"

async function GetMovies(){

    try {
      /*   const response = await axiosInstance.get("/movie")

        return response.data */

        const {data} = await axiosInstance.get("/movie")

        return data
    } catch (error) {
        console.log(error)
        return error
    }

}


export const APIService = {
    GetMovies
}