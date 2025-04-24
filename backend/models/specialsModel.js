import mongoose from "mongoose";

const SpecialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
});

// module.exports = mongoose.model('Special', SpecialSchema);
const specialsModel = mongoose.models.specials || mongoose.model("Special", SpecialSchema);
export default specialsModel;