import Image from "next/image"

interface Props {
  serviceName: string;
  image: string;
}

const Card: React.FC<Props> = ({ serviceName, image }) => {
  
  return (
<div
  className="block overflow-hidden group relative my-4 drop-shadow-lg"
>
  <Image 
    className="bg-slate-300 group-hover:scale-105 transition-transform duration-500 object-cover w-full h-[350px] sm:h-[450px]" 
    height={300} 
    width={300} 
    src={image} 
    alt="servicio de tarot" 
  />
  <h4 className="mb-1 text-rose-200 text-xl font-semibold align-middle flex items-center justify-center text-center py-3 absolute bottom-0 bg-black/90 w-full">{serviceName}</h4>
</div>
  )
}

export default Card
