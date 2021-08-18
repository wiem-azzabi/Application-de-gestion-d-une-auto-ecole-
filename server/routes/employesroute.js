const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const employe = mongoose.model("employe");

router.get("/employes",async (req, res) => {
  try {
    const employes = await employe.find();

    res.status(200);
    res.json(employes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
router.get("/employes/:id/",async (req, res) => {
  const { id } = req.params;
  try {
    const emp = await employe.findById(id);

    res.status(200).json(emp);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});
router.post("/employes", async (req, res) => {
  const { nom, prenom, telephone, poste, photo } = req.body;

  const newemployes = new employe({
    nom,
    prenom,
    telephone,
    poste,
    photo,
  });

  try {
    await newemployes.save();
    res.status(201).json(newemployes);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});
router.patch("/employes/:id",async (req, res) => {
  const { id } = req.params;
  const { nom, prenom, telephone, poste, photo } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`pas d'employé avec id: ${id}`);

  const updatedEmploye = {
    nom,
    prenom,
    telephone,
    poste,
    photo,
    _id: id,
  };

  await employe.findByIdAndUpdate(id, updatedEmploye, { new: true });

  res.json(updatedEmploye);
});
router.delete("/employes/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`pas d'employé avec id: ${id}`);

  await employe.findByIdAndRemove(id);

  res.json({ message: "Employé deleted successfully." });
});

module.exports = router;
