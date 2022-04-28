interface Props {
  title: string;
  image_url: string;
}
const Hero: React.FC<Props> = ({ title, image_url }) => {

  return (
    <aside className="bg-no-repeat bg-center bg-cover p-12 bg-[url('https://www.aliciagalvan.com/wp-content/uploads/2019/05/su_signo_segun_el_horoscopo_maya_1_joya_life-1600x400.jpg')] sm:p-16 lg:p-24">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-sm font-medium text-gray-500">
          Tzolkin Marce
        </p>
        <p className="mt-2 text-3xl font-bold sm:text-5xl text-white">
          {title.toUpperCase()}
        </p>
        <div className="mt-8 sm:items-center sm:justify-center sm:flex">
          <a href="#contacto" className="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-md sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring">
            Contactame
          </a>
        </div>
      </div>
    </aside>
  )
}

export default Hero
