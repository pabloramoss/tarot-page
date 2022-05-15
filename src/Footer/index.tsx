import { FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa"
import Link from "next/link"

const Hero: React.FC = () => {
  
  return (
    <footer className="bg-slate-800 items-center gap-4 flex flex-col py-5">
      <Link href="/">
        <a>
          <p className="text-lg font-semibold text-slate-500">Tzolkin Marce</p>
        </a>
      </Link>
      <div className="flex text-slate-500">
        <a href="https://instagram.com/marceuaxac" className="hover:text-white cursor-pointer mx-2">
          <FaInstagram size="24" />
        </a>
        <a href="https://facebook.com/marceuaxac" className="hover:text-white cursor-pointer mx-2">
          <FaFacebook size="24" />
        </a>
        <a href="https://www.tiktok.com/@tzolkinmarce" className="hover:text-white cursor-pointer mx-2">
          <FaTiktok size="24" />
        </a>
      </div>
    </footer>
  )
}

export default Hero
