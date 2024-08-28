import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createFile, createOrUpdateMovie } from "../helpers"


export const useForm = ({initalForm, METHOD, url}) => {

    const [form, setForm] = useState(initalForm)
    const [imageUrl, setImageUrl] = useState(initalForm.imagen)

    const navigate = useNavigate()

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleInputImage = (e) => {
        const [file] = e.target.files
        const url = URL.createObjectURL(file)

        setImageUrl(url)
        setForm({
            ...form,
            imagen: file.name
        })
    } 

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        if(formData.get('imagen').name === '' && METHOD === 'PUT'){ // Verify if prop imagen is empty in the form initial
            const newFormData = await createFile({formData, initalForm})
            await createOrUpdateMovie({url, formData: newFormData, METHOD})
            navigate('/')
            return 
        }
        
        await createOrUpdateMovie({url, formData, METHOD})
        navigate('/')
    }

    return {
        form,
        imageUrl,
        handleInputChange,
        handleInputImage,
        handleSubmit
    }
}