import mongoose from "mongoose"

const ServicesdbSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "El servicio debe contener la propiedad title"]
  },
  image: {
    type: String,
    required: [true, "El servicio debe contener la propiedad image"]
  },
})

export default mongoose.models.Servicesdb || mongoose.model("Servicesdb", ServicesdbSchema)
