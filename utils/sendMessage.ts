export default function sendMessage( name: string, email: string, message: string, services: string) {
  const text = `Hola, mi nombre es ${name} y tengo interés sobre `
  return text
  
}
//`https://api.whatsapp.com/send?phone=5493425348486&text=${encodeURIComponent(message)}