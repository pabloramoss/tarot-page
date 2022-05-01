import Image from "next/image"
import Dropdown from "./Dropdown"

const Navbar: React.FC = () => {
  
  return (
  <div className="flex justify-between items-center bg-slate-700">
    <a href="#" className="hover:cursor-pointer flex items-center gap-4 ml-4">
      <Image height={50} width={50} src="/firmaGalactica.png" alt="logo" />
      <p className="text-white text-xl font-semibold">Tzolkin Marce</p>
    </a>
    <div className="">
      <div className="gap-4 mr-6 text-white hidden sm:flex">
        <a href="#" className="hover:cursor-pointer hover:text-slate-400">Home</a>
        <a href="#servicios" className="hover:cursor-pointer hover:text-slate-400">Servicios</a>
        <a href="#contacto" className="hover:cursor-pointer hover:text-slate-400">Contacto</a>
      </div>
      <Dropdown />
    </div>
  </div>
  )
}

export default Navbar