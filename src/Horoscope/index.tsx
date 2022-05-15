import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image"

const Horoscope: React.FC = () => {
  const [startDate, setStartDate] = useState<any>(new Date());
  const [url, setUrl] = useState<string>("")
  useEffect(()=> {
    const day = startDate.toISOString().split('T')[0].split("-")[2]
    const month = startDate.toISOString().split('T')[0].split("-")[1]
    const year = startDate.toISOString().split('T')[0].split("-")[0]
    setUrl(`https://13lunas.net/firmaGalacticaBasica.html?nombre=Hoy&dia=${day}&mes=${month}&ano=${year}&x=72&y=26`)
  },[startDate])

  return (
    <div className="flex flex-col items-center pt-10">
      <h4 className="text-rose-400 text-2xl md:text-4xl my-8 text-center text-slate-300">DESCUBRE TU FIRMA GALÁCTICA</h4>
      <div className="h-[200px] w-[200px]">
        <Image src="/firmaGalactica.png" height={200} width={200} alt="firma galactica logo" />
      </div>
      <p className="text-md my-4 text-slate-300">Ingresa tu fecha de nacimiento</p>
      <div className="justify-self-center">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          className="border-2 rounded-md mb-4 text-center"
        />
      </div>
      <a href={url} className="mb-20">
        <button className="bg-slate-300 px-8 py-1 rounded-md font-semibold hover:bg-slate-400">Calcular</button>
      </a>
    </div>
  )
}

export default Horoscope