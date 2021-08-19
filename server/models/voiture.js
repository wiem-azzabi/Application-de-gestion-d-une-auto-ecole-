const mongoose = require("mongoose");

const voitureSchema = new mongoose.Schema({
  nom: {
    type: String,
  },
  etat: {
    type: String,
  },
  reparations: {
    type: Boolean,
    // required: true,
    
  },
  assurances: {
    type: Boolean,
    // required: true,
  },
  vignettes: {
    type: Boolean,
    // required: true,
  },
  visitetechnique: {
    type: Boolean,
    // required: true,
  },

  reportCount: {
    type: Number,
    default: 0,
  },
  entretien: {
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

mongoose.model("voiture", voitureSchema);