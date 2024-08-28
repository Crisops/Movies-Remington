import { useState, useEffect } from "react"
import {API_URL} from "../config"


export const useMovie = () => {

    const [movies, setMovie] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const getMovie = async () => {

            try {
                const response = await fetch(`${API_URL}/movies/api/movies/`)
                if (!response.ok) throw {statusCode: response.status, message: response.statusText}
                const data = await response.json()
                setMovie(data)
            } catch (e) {
                setError({
                    code: e.statusCode,
                    message: e.message
                })
            }
        }
        getMovie()
    }, [])

  return {movies, error}
}
