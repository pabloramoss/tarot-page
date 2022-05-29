import {FaWhatsapp} from "react-icons/fa";
import Link from "next/link";
import {useState} from "react";

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("_____");
  const [text, setText] = useState<string>("");

  const message = `Hola mi nombre es ${name}. ${text}`;

  return (
    <div className="py-8 text-slate-300">
      <h5 className="text-rose-400 font-bold text-2xl md:text-4xl mb-4 text-center" id="contacto">
        CONTACTAME
      </h5>
      <div className="items-center gap-10 justify-center flex flex-col md:flex-row">
        <div className="pt-4 text-slate-500">
          <p className="mb-2">Nombre</p>
          <input
            className="px-2 py-3 w-full mb-4 rounded-md"
            name="name"
            placeholder="Nombre"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          />
          <p className="mb-2">Mensaje</p>
          <textarea
            className="overflow-y-auto mb-4 px-2 rounded-md w-80 h-40 "
            name="number"
            placeholder="Mensaje"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
          />
          <Link href={`https://wa.me/1414141?text=${encodeURIComponent(message)}`}>
            <a>
              <button className="bg-green-400 text-black font-semibold flex items-center px-4 py-3 rounded-md w-full justify-center my-4 hover:bg-green-500">
                <FaWhatsapp className="mr-2" size="20" />
                Enviar
              </button>
            </a>
          </Link>
        </div>
        <div className="">
          <div className="overflow-y-auto py-2 w-80 h-40 md:h-80 rounded-md chat">
            <p className="text-ellipsis justify-self-end px-4 py-2 ml-8 my-4 mr-4 rounded-md bg-green-300 text-sm font-medium text-gray-800 drop-shadow-md">
              {message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
