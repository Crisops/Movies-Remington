
export const FormMovie = (
        {
            action,
            altPreviewTitle = '',
            imagePreviewUrl = '',
            form,
            handleInputChange,
            handleInputImage, handleSubmit,
            placeholder,
            type 
        }
    ) => {
  return (
    <div className="px-3 py-4 sm:px-0 sm:py-0">
        <div>
            <span className="text-zinc-800 font-bold text-3xl">{action}</span>
        </div>
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex-1 mt-10">
        <div className="flex flex-col gap-3">
            <label htmlFor="title">
                <input onChange={handleInputChange} className="w-full h-full outline-none border-b border-zinc-800 text-zinc-500 bg-transparent py-2 px-1" type="text" name="title" placeholder={placeholder.title} value={form.title} />
            </label>
            <label htmlFor="description">
                <textarea onChange={handleInputChange} className="resize-none w-full min-h-40 outline-none border-b border-zinc-800 text-zinc-500 bg-transparent py-2 px-1" name="description" id="description" placeholder={placeholder.description} value={form.description}></textarea>
            </label>
        </div>
        <div className="flex flex-col gap-2">
            <span className="text-zinc-800 text-sm">Preview Image</span>
            <div className="relative w-28 h-36">
                {imagePreviewUrl &&  <img className="absolute w-full h-full object-cover z-20" src={imagePreviewUrl} alt={altPreviewTitle} /> }
                <div className="absolute flex justify-center items-center w-full h-full border border-dashed border-zinc-700">
                    <span className="text-xs text-zinc-500 select-none">Load an image</span>
                </div>
            </div>
            <input accept="image/jpeg" onChange={handleInputImage} type="file" name="imagen" />
            <button type="submit" className="text-zinc-600 transition-colors duration-300 hover:text-white mt-4 px-2 py-2 bg-zinc-950">{type}</button>
        </div>
    </form>
    </div>

  )
}
