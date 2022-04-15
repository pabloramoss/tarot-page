import { FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa"
import Link from "next/link"

const index: React.FC = () => {
  
  return (
    <footer className="bg-orange-300 flex flex-col items-center">
      <div className="flex mt-8 gap-6">
        <a href="https://instagram.com" className="hover:text-white cursor-pointer">
          <FaInstagram size="24" />
        </a>
        <a href="https://facebook.com" className="hover:text-white cursor-pointer">
          <FaFacebook size="24" />
        </a>
        <a href="https://tiktok.com" className="hover:text-white cursor-pointer">
          <FaTiktok size="24" />
        </a>
      </div>
      <Link href="/">
        <a>
          <p className="text-lg font-semibold my-4">Tzolkin Marce</p>
        </a>
      </Link>
    </footer>
  )
}

export default index
