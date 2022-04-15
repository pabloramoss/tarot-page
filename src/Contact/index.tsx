import { FaWhatsapp } from "react-icons/fa"
import Link from "next/link"
import { useState } from "react"

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("_____")
  const [email, setEmail] = useState<string>("_____")
  const [text, setText] = useState<string>("")

  const message = `Hola mi nombre es ${name} y tengo interes sobre firma galactica y cartas pleyadianas. Mi email de contacto es ${email}\n ${text}`

  return (
    <div className="bg-slate-400 py-8">
      <h5 className="font-bold text-2xl mb-4 text-center">CONTACTAME</h5>
      <div className=" gap-10 justify-center flex flex-col md:flex-row">
        <div className="pt-6">
          <p>Nombre</p>
          <input 
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setName(e.target.value)} 
            className="px-2 rounded-sm" 
            name="name" 
            placeholder="Nombre" 
          />
          <p>Email</p>
          <input 
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)} 
            className="px-2 rounded-sm" 
            name="number" 
            placeholder="Email" 
          />
          <p>Mensaje</p>
          <textarea 
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>)=>setText(e.target.value)} 
            className="overflow-y-auto mb-4 px-2 rounded-sm w-80 h-40" 
            name="number" 
            placeholder="Mensaje" 
          />
        </div>
        <div className="self-center my-4">
          <div className="overflow-y-scroll py-2 w-80 h-80 rounded-sm chat">
            <p className="text-ellipsis overflow-hidden justify-self-end px-4 py-2 ml-8 my-4 mr-4 rounded-md bg-green-200 text-sm font-medium text-gray-800 drop-shadow-md">
              {message}
            </p>
          </div>
          <Link href={`https://wa.me/1414141?text=${encodeURIComponent(message)}`}>
            <a>
              <button className="bg-green-400 font-semibold flex items-center px-4 py-2 rounded-md gap-2 w-40 justify-center my-4"><FaWhatsapp width={8} height={8} />Enviar</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact