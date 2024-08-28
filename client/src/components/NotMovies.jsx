import { Link } from "react-router-dom"
import { IconCreate, IconNotFoundMovies } from "./Icons"

export const NotMovies = () => {
  return (
    <div className="w-screen h-[calc(100vh-7rem)] flex flex-col justify-center items-center gap-3">
        <IconNotFoundMovies/>
        <div className="inline-flex gap-3">
            <span className="text-zinc-500 text-sm">You have no movies to show. Create your own here:</span>
            <Link to={'create'}><IconCreate/></Link>
        </div>
    </div>
  )
}
