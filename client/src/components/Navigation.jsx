import {Link} from 'react-router-dom'
import { IconCreate, IconHome } from './Icons'

export const Navigation = () => {
  return (
    <nav className='xl:mr-10'>
        <ul className='flex items-center gap-2 xl:gap-4'>
            <li>
              <Link className='relative flex justify-center items-center gap-2 w-full px-3 py-2 overflow-hidden group transition-all before:absolute before:w-full before:h-[1px] before:left-0 before:bottom-0 before:bg-gradient-to-r before:from-transparent before:via-yellow-400 before:to-transparent before:scale-x-0 before:opacity-0 before:transition-all before:duration-500 hover:before:scale-x-100 hover:before:opacity-100 after:absolute after:w-full after:h-1/2 after:left-0 after:bottom-0 after:-z-10 after:bg-[radial-gradient(#fccc15_0%,transparent_80%)] after:opacity-0 after:blur-lg hover:after:opacity-50 after:transition-all after:duration-500 after:translate-y-full hover:after:translate-y-1/2' to={'/'}><IconHome/><span className='text-zinc-600 group-hover:text-white transition-colors duration-500 text-sm xl:text-base'>Home</span></Link>
            </li>
            <li>
                <Link className='relative flex justify-center items-center gap-2 w-full px-3 py-2 overflow-hidden group transition-all before:absolute before:w-full before:h-[1px] before:left-0 before:bottom-0 before:bg-gradient-to-r before:from-transparent before:via-green-500 before:to-transparent before:scale-x-0 before:opacity-0 before:transition-all before:duration-500 hover:before:scale-x-100 hover:before:opacity-100 after:absolute after:w-full after:h-1/2 after:left-0 after:bottom-0 after:-z-10 after:bg-[radial-gradient(#22c55e_0%,transparent_80%)] after:opacity-0 after:blur-lg hover:after:opacity-50 after:transition-all after:duration-500 after:translate-y-full hover:after:translate-y-1/2' to={'/create'}><IconCreate/><span className='text-zinc-600 group-hover:text-white transition-colors duration-500 text-sm xl:text-base'>Create</span></Link>
            </li>
        </ul>
    </nav>
  )
}
