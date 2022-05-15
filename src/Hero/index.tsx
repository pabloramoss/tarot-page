
const Hero: React.FC = () => {

  return (
    <main className="hero kw-screen bg-center bg-cover p-12 bg-[url('https://www.aliciagalvan.com/wp-content/uploads/2019/05/su_signo_segun_el_horoscopo_maya_1_joya_life-1600x400.jpg')] mx-auto max-w-7xl px-4 sm:px-6  lg:px-8 ">
    <div className="text-left">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block text-white xl:inline">Calendario</span>{' '}
        <span className="block text-rose-400 xl:inline">Maya</span>
      </h1>
      <p className="mt-3 text-left text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
        fugiat veniam occaecat fugiat aliqua.
      </p>
      <div className="mt-5 sm:mt-8 justify-center sm:flex sm:justify-center lg:justify-start">
        <div className="mt-3 sm:mt-0">
          <a
            href="#contacto"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
          >
            Contactame
          </a>
        </div>
      </div>
    </div>
  </main>
  )
}

export default Hero
