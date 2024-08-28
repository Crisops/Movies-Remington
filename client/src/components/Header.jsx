import { Outlet } from "react-router-dom"
import { Navigation } from "./Navigation"

export const Header = () => {
  return (
    <>
    <header className="flex flex-col sm:flex-row justify-between items-center h-28 px-3 py-2 border-b border-zinc-900">
        <img className="[clip-path: polygon(0_0,_99%_0,_99%_100%,_0%_100%);] w-44 sm:w-52" src="/logo-universidad.png" alt="" />
        <Navigation/>
    </header>
    <Outlet/>
    </>

  )
}
