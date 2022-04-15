interface Props {
  title: string;
  image_url: string;
}
const index: React.FC<Props> = ( {title, image_url} ) => {
  
  return (
    <div>
      <img src={image_url} alt={title} />
      <h1 className="absolute text-3xl text-gray-300">{title}</h1>
    </div>
  )
}

export default index
