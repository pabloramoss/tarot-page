import Image from "next/image"

interface Props {
  serviceName: string;
  image: string;
}

const Card: React.FC<Props> = ({ serviceName, image }) => {
  
  return (
<div
  className="block overflow-hidden group"
>
  <Image 
    className="bg-slate-300 group-hover:scale-105 transition-transform duration-500 object-cover w-full h-[350px] sm:h-[450px]" 
    height={200} 
    width={200} 
    src={image} 
    alt="servicio de tarot" 
  />
  <h4 className="text-xl font-semibold my-2 text-center h-16">{serviceName}</h4>
</div>
  )
}

export default Card
