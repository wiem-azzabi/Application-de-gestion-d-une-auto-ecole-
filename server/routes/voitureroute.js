
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const voiture = mongoose.model("voiture");


router.get("/cars",async (req, res) => {
  try {
    const voitures = await voiture.find({});
    res.status(200);
    res.json(voitures);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
router.get("/cars/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const car = await voiture.findById(id);

    res.status(200).json(car);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
router.post("/cars", async (req, res) => {
  const {
    nom,
    etat,
    photo,
    reparations,
    assurances,
    vignettes,
    visitetechnique,
    entretien,
  } = req.body;
  const newvoiture = new voiture({
    nom,
    etat,
    photo,
    reparations,
    assurances,
    vignettes,
    visitetechnique,
    entretien,
  });

  try {
    await newvoiture.save();
    res.status(201).json(newvoiture);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});
router.patch("/cars/:id", async (req, res) => {
  const { id } = req.params;
  const {
    nom,
    etat,
    photo,
    reparations,
    assurances,
    vignettes,
    visitetechnique,
    entretien,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No car with id: ${id}`);

  const updatedCar = {
    nom,
    etat,
    photo,
    reparations,
    assurances,
    vignettes,
    visitetechnique,
    entretien,
    _id: id,
  };

  await voiture.findByIdAndUpdate(id, updatedCar, { new: true });

  res.json(updatedCar);
});
router.delete("/cars/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No car with id: ${id}`);

  await voiture.findByIdAndRemove(id);

  res.json({ message: "Car deleted successfully." });
});

router.patch("/cars/:id/reportCar", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No car with id: ${id}`);

  const car = await voiture.findById(id);

  const updatedCar = await voiture.findByIdAndUpdate(
    id,
    { reportCount: car.reportCount + 1 },
    { new: true }
  );

  res.json(updatedCar);
});

module.exports = router;