import { APIService } from "../services/api/apiService"

async function getMovies(){
    try {
        
        const response = await APIService.GetMovies()

        console.log(response)


    } catch (error) {
        console.log(error)
    }
}


export const movieUseCases = {
    getMovies

} 