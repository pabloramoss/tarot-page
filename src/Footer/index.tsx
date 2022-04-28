import { FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa"
import Link from "next/link"

const Hero: React.FC = () => {
  
  return (
    <footer>
      <div id="svg-parent">
      <svg className="footer" viewBox="0 0 500 150" preserveAspectRatio="none">
        <path id="path" d="M-0.27,103.13 C238.99,10.38 263.82,10.38 500.84,99.19 L500.00,150.00 L0.00,150.00 Z" />
      </svg>
      </div>
      <div className="bg-slate-700 items-center gap-4 flex flex-col">
        <Link href="/">
          <a>
            <p className="text-lg font-semibold text-slate-500">Tzolkin Marce</p>
          </a>
        </Link>
        <div className="flex text-slate-500 mb-10">
          <a href="https://instagram.com" className="hover:text-white cursor-pointer mx-2">
            <FaInstagram size="24" />
          </a>
          <a href="https://facebook.com" className="hover:text-white cursor-pointer mx-2">
            <FaFacebook size="24" />
          </a>
          <a href="https://tiktok.com" className="hover:text-white cursor-pointer mx-2">
            <FaTiktok size="24" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Hero
