import Card from "./Card"

const Services: React.FC = () => {
  const services = [{title: "Tu carta natal", image: "/cartaNatal.png"},{title: "Cartas pleyadianas", image: "/cartasPleyadianas.jpg"},{title: "Cartas de Ángeles", image: "/cartasDeAngeles.jpg"},]
  
  return (
    <div id="servicios" className="text-slate-300">
      <h2 className="text-2xl md:text-4xl font-semibold text-center py-8">SERVICIOS</h2>
      <div className="flex flex-col items-center justify-center sm:flex-row sm:gap-4 sm:flex-wrap">
        {services.map((item)=> <Card key={item.title} serviceName={item.title} image={item.image}/>)}
      </div>
    </div>
  )
}

export default Services
