const Hero: React.FC = () => {
  return (
    <main className="flex justify-center hero bg-center bg-cover p-12 bg-[url('https://www.aliciagalvan.com/wp-content/uploads/2019/05/su_signo_segun_el_horoscopo_maya_1_joya_life-1600x400.jpg')] mx-auto px-4 sm:px-6 h-[700px] lg:px-8 ">
      <div className="mt-20">
        <p className="font-bold mb-4 text-rose-400 text-center text-xl sm:hidden">Tzolkin Marce</p>
        <h1 className="text-5xl md:text-4xl text-center tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block text-white xl:inline">Calendario</span>{" "}
          <span className="block text-rose-400 xl:inline">Maya</span>
        </h1>
        <p className="mt-3 text-left text-gray-200 sm:mt-5 sm:text-lg md:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
          Elit sunt amet fugiat veniam occaecat fugiat aliqua.
        </p>
        <div className="mt-5 sm:mt-8 justify-center sm:flex justify-center">
          <div className="flex mt-3 sm:mt-0">
            <a
              className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300 bg-rose-400 shadow-lg shadow-rose-400/30 w-full px-8 py-3 text-center border border-transparent text-base font-medium rounded-md text-white hover:bg-rose-300 md:py-4 md:text-lg md:px-10"
              href="#contacto"
            >
              Contactame
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
