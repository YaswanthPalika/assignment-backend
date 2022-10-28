const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const foodsRoute = require("./routes/foods");

//start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server started at PORT ", PORT);
});

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//routes
app.use("/", foodsRoute);

//to mongodb atlas
mongoose
  .connect(
    "mongodb+srv://yas:yas@cluster0.g6bq2jh.mongodb.net/fooddb?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connect to mongodb atlas");
  })
  .catch((e) => {
    console.log(e);
  });
