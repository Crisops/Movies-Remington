import { FormMovie } from "../components/FormMovie"
import { API_URL } from "../config"
import { useForm } from "../hooks/useForm"

export const CreateMovies = () => {

  const initalForm = {title: '', description: '', imagen: ''}

  const url = `${API_URL}/movies/api/movies/`

  const {form, imageUrl, handleInputChange, handleInputImage, handleSubmit} = useForm({initalForm, METHOD: 'POST', url})

  return (
    <section className="relative w-full h-[calc(100vh-7rem)] flex justify-center items-center">
      <div className="w-[500px]">
        <FormMovie
          action='Create Movie'
          altPreviewTitle={form.title}
          imagePreviewUrl={imageUrl}
          form={form}
          handleInputChange={handleInputChange}
          handleInputImage={handleInputImage}
          handleSubmit={handleSubmit}
          placeholder={{title: 'Title', description: 'Description'}}
          type='Create'
        />
      </div>
    </section>
  )
}
