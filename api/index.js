const Express = require("express");
const app = Express();
const Mongoose = require("mongoose");
const dotENV = require("dotenv");
dotENV.config();

Mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB successfuly connected"))
  .catch((error) => console.log(error));
  app.get("/testroute", () => {
    console.log("our test API route") 
  })

app.listen(5000, () => {
  console.log("backend server is running");
});
