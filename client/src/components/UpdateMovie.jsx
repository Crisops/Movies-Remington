import { API_URL } from "../config"
import { useForm } from "../hooks/useForm"
import { FormMovie } from "./FormMovie"

export const UpdateMovie = ({idMovie, title, description, imagen, viewBoxUpdate}) => {

    const initalForm = {title, description, imagen}

    const url = `${API_URL}/movies/api/movies/${idMovie}/`

    const {form, imageUrl, handleInputChange, handleInputImage, handleSubmit} = useForm({initalForm, idMovie, METHOD: 'PUT', url})

  return (
    <div className={`${viewBoxUpdate ? 'h-full  px-4 py-4 sm:max-xl:w-[600px] xl:w-[450px]' : 'xl:w-0 xl:h-0 hidden'} sm:max-xl:p-10`}>
        <FormMovie
            action='Update Movie'
            imagePreviewUrl={imageUrl}
            altPreviewTitle={title}
            form={form}
            handleInputChange={handleInputChange}
            handleInputImage={handleInputImage}
            handleSubmit={handleSubmit}
            placeholder={{title: 'New Title', description: 'New Description'}}
            type='Update'
        />
    </div>
  )
}
