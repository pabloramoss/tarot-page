import Image from "next/image"

interface Props {
  serviceName: string;
}

const Card: React.FC<Props> = ({ serviceName }) => {
  
  return (
    <div className="flex flex-col max-w-xs">
      <Image className="object-cover" height={200} width={200} src="https://via.placeholder.com/200" alt="servicio de tarot" />
      <h4 className="text-xl font-semibold my-2 text-gray-500 text-center">{serviceName}</h4>
    </div>
  )
}

export default Card
