import Card from "./Card";

const Services: React.FC = () => {
  const services = [
    {title: "Tu carta natal", image: "/cartaNatal.png"},
    {title: "Cartas pleyadianas", image: "/cartasPleyadianas.jpg"},
    {title: "Cartas de Ángeles", image: "/cartasDeAngeles.jpg"},
  ];

  return (
    <div className="text-slate-300" id="servicios">
      <h2 className="text-2xl md:text-4xl font-semibold text-rose-400 text-center py-8">
        SERVICIOS
      </h2>
      <div className="flex flex-col items-center justify-center sm:flex-row sm:gap-8 sm:flex-wrap">
        {services.map((item) => (
          <Card key={item.title} image={item.image} serviceName={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Services;
