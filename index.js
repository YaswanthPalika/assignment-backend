const express = require("express");
const mongoose = require("mongoose");

const app = express();

//start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server started at PORT ", PORT);
});

//to mongodb atlas
mongoose
  .connect(
    "mongodb+srv://yas:yas@cluster0.wdszhtf.mongodb.net/fooddb?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connect to mongodb atlas");
  })
  .catch((e) => {
    console.log("something went wrong");
  });
