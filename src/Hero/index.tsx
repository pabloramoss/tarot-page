interface Props {
  title: string;
  image_url: string;
}
const Hero: React.FC<Props> = ( {title, image_url} ) => {
  
  return (
    <div className="flex justify-center">
      <img className="w-screen" src={image_url} alt={title} />
      <h1 className="absolute font-semibold text-3xl text-gray-300">{title.toUpperCase()}</h1>
    </div>
  )
}

export default Hero
