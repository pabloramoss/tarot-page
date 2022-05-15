import Image from "next/image"

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  return (
    <div className="mx-auto max-w-7xl flex flex-col items-center justify-between py-4 gap-4 sm:flex-row">
      <a href="#" className="hover:cursor-pointer flex items-center gap-4 ml-4 justify-self-start self-start">
        <Image height={50} width={50} src="/firmaGalactica.png" alt="logo" />
        <p className="ml-4 text-rose-400 text-xl font-semibold">Tzolkin Marce</p>
      </a>
      <div className="m-4">
        {navigation.map((item) => (
          <a key={item.name} href={item.href} className="mx-3 font-medium text-gray-500 hover:text-gray-300">
            {item.name}
          </a>
        ))}
      </div>
    </div>
  )
}