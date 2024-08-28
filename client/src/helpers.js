
export const createFile = async ({formData, initalForm}) => {
    const imagePreviewResponse = await fetch(`${initalForm.imagen}`) // Get response image preview
    const blob = await imagePreviewResponse.blob() // Convert response to blob
    const nameFilePreview = imagePreviewResponse.url.split('/')[4] // Get name file
    const extensionFilePreview = nameFilePreview.split('.').pop(); // Get extension file
    const newFile = new File([blob], nameFilePreview, {type: `image/${extensionFilePreview}`}) // Create new file
    console.log(newFile);
    
    formData.set('imagen', newFile) // Set new file
    return formData
}



export const createOrUpdateMovie = async ({url, formData, METHOD}) => {
    const options = {
        method: METHOD,
        body: formData,
    }

    try {
        const response = await fetch(url, options)
        if(!response.ok) throw {code: response.status, message: response.statusText}
    } catch (error) {
        console.log(error);
    }
}

export const deteleMovie = async ({url,idMovie}) => {
    const options = {
        method: 'DELETE'
    }
    try {
        const response = await fetch(`${url}/${idMovie}/`, options)
        if(!response.ok) throw {code: response.status, message: response.statusText}
    } catch (error) {
        console.log(error);
    }
}