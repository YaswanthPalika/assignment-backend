const express = require("express");
const router = express.Router();
const Food = require("../models/foods");

//POST route
router.post("/", (req, res) => {
  //console.log(req.body);
  food = new Food({
    name: req.body.name,
    rating: req.body.rating,
    place: req.body.place,
    image: req.body.image,
  });
  food
    .save()
    .then(() => res.send("uploaded successfully"))
    .catch((e) => res.send("failed").status(500));
});

//GET route
//READ or get all records route
router.get("/", (req, res) => {
  Food.find()
    .then((foods) => res.send(foods))
    .catch((error) => res.send(error));
});

//delete route
router.delete("/:foodId", (req, res) => {
  Food.findByIdAndRemove(req.params.foodId)
    .then(res.send("deleted"))
    .catch((e) => res.send(e).status(500));
});

//update route
router.put("/:foodId", async (req, res) => {
  //console.log(req.body);
  const response = await Food.findByIdAndUpdate(req.params.foodId, {
    name: req.body.name,
    rating: req.body.rating,
    place: req.body.place,
    image: req.body.image,
  }).catch((e) => res.send(e).status(500));

  res.send("updated");
});

module.exports = router;
