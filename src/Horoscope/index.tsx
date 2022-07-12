import {useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";

const Horoscope: React.FC = () => {
  const [startDate, setStartDate] = useState<any>(new Date());
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    const day = startDate.getDate();
    const month = startDate.getMonth() + 1;
    const year = startDate.getFullYear();

    setUrl(
      `https://13lunas.net/firmaGalacticaBasica.html?nombre=Hoy&dia=${day}&mes=${month}&ano=${year}&x=72&y=26`,
    );
  }, [startDate]);

  return (
    <div className="flex flex-col items-center pt-10">
      <h4 className="text-rose-400 font-semibold text-2xl md:text-4xl my-8 text-center text-slate-300">
        DESCUBRE TU FIRMA GALÁCTICA
      </h4>
      <div className="h-[200px] w-[200px]">
        <Image alt="firma galactica logo" height={200} src="/firmaGalactica.png" width={200} />
      </div>
      <p className="text-lg my-4 text-slate-300">Ingresá tu fecha de nacimiento</p>
      <div className="justify-self-center">
        <DatePicker
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          className="border-2 rounded-md mb-4 text-lg font-semibold text-center py-2"
          dateFormat="dd/MM/yyyy"
          dropdownMode="select"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <a className="mb-20 mt-4" href={url}>
        <button className="bg-slate-300 px-10 py-2 rounded-md font-semibold hover:bg-slate-400">
          Calcular
        </button>
      </a>
    </div>
  );
};

export default Horoscope;
