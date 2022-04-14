import Card from "./Card"

const index: React.FC = () => {
  const services = ["Firma galactica","Cartas pleyadianas","Tarot chamanico",]
  
  return (
    <div id="servicios">
      <h2 className="text-2xl font-bold">Servicios</h2>
      <div className="md:flex md:gap-4 md:justify-center md:flex-wrap">
        {services.map((item)=> <Card key={item} serviceName={item} />)}
      </div>

    </div>
  )
}

export default index
