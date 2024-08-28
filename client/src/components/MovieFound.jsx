import { useState } from "react"
import { IconTrash, IconUpdate } from "./Icons"
import { UpdateMovie } from "./UpdateMovie"
import { ModalConfirm } from "./ModalConfirm"
import { API_URL } from "../config"
import { useNavigate } from "react-router-dom"
import { deteleMovie } from "../helpers"
import { ButtonAction } from "./ButtonAction"

export const MovieFound = ({idMovie, movie}) => {

    const {title, description, imagen} = movie

    const [viewBoxUpdate, setViewBoxUpdate] = useState(false)

    const [modalView, setModalView] = useState(false)
    const navigate = useNavigate()

    
    const modalViewConfirm = () => {
        console.log('Llega aca');
        
        setModalView(prev => !prev)
    }

    const handleDeteleMovie = async ({ idMovie }) => {   
        const url = `${API_URL}/movies/api/movies`    
        await deteleMovie({url, idMovie})
        return navigate('/')
    }

    const updateViewBox = () => {
        setViewBoxUpdate(prev => !prev)
    }
    
  return (
    <section className="relative flex items-center xl:h-[calc(100vh-7rem)] sm:px-3">
        {modalView && <ModalConfirm idMovie={idMovie} titleMovie={title} modalViewConfirm={modalViewConfirm} handleDeteleMovie={handleDeteleMovie}/>}
        <div className="flex flex-col pt-3 xl:grid flex-grow xl:grid-cols-[500px_1fr_max-content]">
            <div className="relative flex justify-center sm:justify-start h-[400px] sm:h-[450px] xl:h-[700px] xl:px-0 xl:py-0">
                <img className="absolute w-[330px] sm:w-[400px] h-auto aspect-square xl:w-full xl:h-full object-cover" src={imagen} alt={title}/>
            </div>
            <div className="flex flex-col gap-4 flex-grow bg-[#020710]/50 p-3 sm:p-6">
                <div className="flex flex-col gap-10">
                    <h1 className=" text-3xl sm:max-xl:text-4xl xl:text-6xl uppercase text-white font-bold max-w-[900px]">{title}</h1>
                    <p className="text-zinc-600 max-w-[600px]">{description}</p>
                </div>
                <div className="flex gap-4">
                    <ButtonAction
                        action={viewBoxUpdate ? 'Close': 'Update'}
                        icon={<IconUpdate/>}
                        size='px-10 py-3'
                        bgColor='before:bg-gradient-to-r before:from-transparent before:via-sky-400 before:to-transparent'
                        bgRadial='after:bg-[radial-gradient(#2070ff_0%,transparent_80%)]'
                        handleClick={updateViewBox}
                    />
                     <ButtonAction
                        action='Delete'
                        icon={<IconTrash/>}
                        size='px-10 py-3'
                        bgColor='before:bg-gradient-to-r before:from-transparent before:via-red-600 before:to-transparent'
                        bgRadial='after:bg-[radial-gradient(#fe240e_0%,transparent_80%)]'
                        handleClick={modalViewConfirm}
                    />
                </div>
            </div>  
            <UpdateMovie idMovie={idMovie} title={title} description={description} imagen={imagen} viewBoxUpdate={viewBoxUpdate}/>
        </div>
    </section>
  )
}
