import Card from "./Card"

const Services: React.FC = () => {
  const services = ["Firma galactica","Cartas pleyadianas","Tarot chamanico",]
  
  return (
    <div id="servicios" className="text-slate-300">
      <h2 className="text-4xl font-semibold text-center py-8">SERVICIOS</h2>
      <div className="flex flex-col items-center justify-center sm:flex-row sm:gap-4 sm:flex-wrap">
        {services.map((item)=> <Card key={item} serviceName={item} />)}
      </div>

    </div>
  )
}

export default Services
