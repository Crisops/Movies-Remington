import { useParams } from "react-router-dom"
import { useMovie } from "../hooks/useMovie";
import { ErrorMovieFound } from "../components/ErrorMovieFound";
import { MovieFound } from "../components/MovieFound";
import { ErrorMovies } from "../components/ErrorMovies";


export const MovieId = () => {

  const { id } = useParams()
  const {movies, error} = useMovie()

  if(error) return <ErrorMovies/>

  const movie = movies.find(movie => movie.id === Number(id))  

  return (
    <>
      {(!movie) ? <ErrorMovieFound/> : <MovieFound idMovie={id} movie={movie}/> }
    </>
  )
}
