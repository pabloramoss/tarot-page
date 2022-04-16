import mongoose from "mongoose"

const HerodbSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "El hero debe contener la propiedad title"]
  },
  image: {
    type: String,
    required: [true, "El hero debe contener la propiedad image"]
  },
})

export default mongoose.models.Herodb || mongoose.model("Herodb", HerodbSchema)
