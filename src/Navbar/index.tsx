import Image from "next/image"

const Navbar: React.FC = () => {
  
  return (
  <div className="flex justify-between items-center bg-orange-300">
    <a href="#" className="hover:cursor-pointer">
      <Image height={50} width={100} src="https://via.placeholder.com/100x50" alt="logo" />
    </a>
    <div className="gap-3">
      <a href="#" className="hover:cursor-pointer">Home</a>
      <a href="#servicios" className="hover:cursor-pointer">Servicios</a>
      <a href="#contacto" className="hover:cursor-pointer">Contacto</a>
    </div>
  </div>
  )
}

export default Navbar
