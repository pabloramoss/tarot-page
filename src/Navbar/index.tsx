import Image from "next/image";
import Link from "next/link";

const navigation = [
  {name: "Home", href: "/#"},
  {name: "Servicios", href: "/#servicios"},
  {name: "Contacto", href: "/#contacto"},
];

export default function Navbar() {
  return (
    <div className="pl-4 mx-auto bg-slate-900 max-w-7xl flex items-center justify-between gap-4 ">
      <div className="">
        <Link href="/">
          <a className="hover:cursor-pointer flex items-center gap-4">
            <Image alt="logo" height={40} src="/firmaGalactica.png" width={40} />
            <p className="hidden md:flex ml-2 text-rose-400 text-xl font-semibold">Tzolkin Marce</p>
          </a>
        </Link>
      </div>
      <div className="md:text-xl my-4">
        {navigation.map((item) => (
          <a
            key={item.name}
            className="mx-3 font-medium text-gray-500 hover:text-gray-300"
            href={item.href}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
