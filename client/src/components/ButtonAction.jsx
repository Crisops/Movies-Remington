
export const ButtonAction = ({idMovie, action, icon = '', bgColor, bgRadial, size, handleClick}) => {    
  return (
    <button onClick={() => handleClick({idMovie})} className={`group relative flex justify-center items-center gap-2 ${size} overflow-hidden transition-all before:absolute before:w-full before:h-[1px] before:left-0 before:bottom-0 before:bg-gradient-to-r ${bgColor} before:scale-x-0 before:opacity-0 before:transition-all before:duration-500 hover:before:scale-x-100 hover:before:opacity-100 after:absolute after:w-full after:h-1/2 after:left-0 after:bottom-0 after:-z-10 ${bgRadial} after:opacity-0 after:blur-lg hover:after:opacity-50 after:transition-all after:duration-500 after:translate-y-full hover:after:translate-y-1/2 fill-white`}>{icon}<span className='text-zinc-600 group-hover:text-white transition-colors duration-500 text-sm xl:text-base'>{action}</span></button>
  )
}
