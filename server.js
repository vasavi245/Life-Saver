const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

app.use("/users", require("./routes/userRouter"));
app.use("/donors", require("./routes/donorRouter"));


const mongoURI = 'mongodb://vasavi:lifesaver245@ds339648.mlab.com:39648/heroku_z7bhk992'

mongoose
  .connect(
    process.env.MONGODB_URI ||
    mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('Go on mongoDB connection successful'))
  .catch(err => console.log(err))


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
