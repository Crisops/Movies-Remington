import { ButtonAction } from "./ButtonAction"
import { IconBack } from "./Icons"


export const ModalConfirm = ({ idMovie, titleMovie, modalViewConfirm, handleDeteleMovie}) => {
    
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 backdrop-blur-sm bg-[#010307]/80">
      <div className="relative w-[500px] h-[250px] bg-white/5 rounded-lg">
        <div className="absolute w-full h-full bg-[radial-gradient(#090a0a_2%,transparent_80%)] -z-10"></div>
        <div className="flex flex-col gap-4 justify-center items-start w-full h-full px-4 py-2">
          <header>
            <h2 className="text-4xl text-white font-bold">Are you sure?</h2>
          </header>
          <p className="text-white/40 text-base">This action has no return, are you sure you want to delete the <span className="font-bold">{titleMovie}</span> movie?</p>
          <div className="flex gap-4">
            <ButtonAction
              action='Confirm'
              size='px-4 py-2'
              bgColor='before:from-transparent before:via-purple-600 before:to-transparent'
              bgRadial='after:bg-[radial-gradient(#6700cd_0%,transparent_80%)]'
              handleClick={handleDeteleMovie}
              idMovie={idMovie}
              />
            <ButtonAction
              action='Back'
              size='px-4 py-2'
              bgColor='before:from-transparent before:via-red-600 before:to-transparent'
              bgRadial='after:bg-[radial-gradient(#cd0016_0%,transparent_80%)]'
              handleClick={modalViewConfirm}
              icon={<IconBack/>}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
