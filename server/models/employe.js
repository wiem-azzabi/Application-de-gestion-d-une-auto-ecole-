const mongoose = require("mongoose");

const employeSchema = new mongoose.Schema({
  nom: {
    type: String,
    // required: true,
  },
  prenom: {
    type: String,
    // required: true,
  },
  telephone: {
    type: Number,
    default: 0,
  },
  poste: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  photo: {
    type: String,
    default: "",
  },
});
mongoose.model("employe", employeSchema);
