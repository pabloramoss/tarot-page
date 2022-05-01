import Image from "next/image"

interface Props {
  serviceName: string;
  image: string;
}

const Card: React.FC<Props> = ({ serviceName, image }) => {
  
  return (
    <div className="flex flex-col max-w-[200px]">
      <Image className="object-cover bg-slate-300" height={200} width={200} src={image} alt="servicio de tarot" />
      <h4 className="text-xl font-semibold my-2 text-center h-16">{serviceName}</h4>
    </div>
  )
}

export default Card
