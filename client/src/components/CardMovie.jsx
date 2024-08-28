import { Link } from 'react-router-dom'
export const CardMovie = ({ movie }) => {
  return (
    <>
    <Link className='relative w-full' to={`/movie/${movie.id}`} rel='noopener noreferrer'>
      <article className="group relative h-full border border-zinc-950 rounded-md overflow-hidden cursor-pointer before:absolute before:inset-0 before:bg-gradient-to-t from-black via-black/80 to-transparent before:z-[2] before:transition-opacity before:duration-500  hover:before:opacity-10">
          <img className="absolute w-full h-full object-center rounded-md transition-transform duration-500 ease-out group-hover:scale-105 " src={movie.imagen} alt={movie.title} />
      </article>
    </Link>
    </>

  )
}
