import {FaTiktok, FaInstagram, FaFacebook} from "react-icons/fa";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <footer className="bg-slate-800 items-center gap-4 flex flex-col py-5">
      <Link href="/">
        <a>
          <p className="text-lg font-semibold text-slate-500">Tzolkin Marce</p>
        </a>
      </Link>
      <div className="flex text-slate-500">
        <a
          className="hover:text-white cursor-pointer mx-2"
          href="https://instagram.com/marceuaxac"
          rel="noreferrer"
          target="_blank"
        >
          <FaInstagram size="24" />
        </a>
        <a
          className="hover:text-white cursor-pointer mx-2"
          href="https://facebook.com/marceuaxac"
          rel="noreferrer"
          target="_blank"
        >
          <FaFacebook size="24" />
        </a>
        {/* <a
          className="hover:text-white cursor-pointer mx-2"
          href="https://www.tiktok.com/@tzolkinmarce"
        >
          <FaTiktok size="24" />
        </a> */}
      </div>
    </footer>
  );
};

export default Hero;
