const router = require("express").Router();
const BookFlight = require("../models/BookFlight");

//route for inserting data to db
router.route("/create").post(async (req, res) => {
  const { price, startTime, endTime, stops, weight, title } = req.body;

  //create new object using the schema
  const newBookFlight = new BookFlight({
    price,
    startTime,
    endTime,
    stops,
    weight,
    title,
  });

  await newBookFlight
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch(
      (error) => res.status(500).json({ success: false, error: error }) // else save to the db
    );
});

//route for fetching booking details
router.route("/").get(async (req, res) => {
  await BookFlight.find()
    .then((bookflight) => res.json(bookflight))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for getting relevant travel information using id
router.route("/get/:id").get(async (req, res) => {
  const { id } = req.params;
  await BookFlight.findById(id)
    .then((bookflights) => res.json(bookflights))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

//route for deleting a relavant travel detail using id
router.route("/delete/:id").delete(async (req, res) => {
  const { id } = req.params;

  await BookFlight.findByIdAndRemove(id) //find_by_id_and_remove
    .then(() => res.json({ message: "Successfully Deleted" }))
    .catch((error) => res.status(500).json({ success: false, error: error }));
});

module.exports = router;
