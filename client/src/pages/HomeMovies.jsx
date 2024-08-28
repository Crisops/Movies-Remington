import { useMovie } from '../hooks/useMovie'
import {CardMovie} from '../components/CardMovie'
import { Outlet } from 'react-router-dom'
import { NotMovies } from '../components/NotMovies'

export const HomeMovies = () => {

  const {movies, error} = useMovie()
  
  if(movies.length < 1) return <NotMovies/>

  return (
    <div className='py-4'>
      <h3 className='ml-3 text-4xl text-white font-bold'>Your movies</h3>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-2 auto-rows-[400px] md:auto-rows-[500px] px-3 mt-10">
        {
          error
          ? <p>{error.message}</p>
          : movies.map(movie => <CardMovie key={movie.id} movie={movie}/>)
        }
        <Outlet/>
      </div>
    </div>

  )
}
