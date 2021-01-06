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



<<<<<<< HEAD
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://sindhu:lifesaver3@cluster-3bq6z850.eu2rc.mongodb.net/bloodweneed?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
=======
 const mongoURI = "mongodb://localhost/bloodweneed"
//'mongodb://sindhu:lifesaver3@ds135128.mlab.com:35128/heroku_3bq6z850'
console.log(process.env.DB_URI);
mongoose
  .connect(
    process.env.DB_URI ||
    mongoURI,
    { useNewUrlParser: true }
  )
 
  .then(() => console.log('Go on mongoDB connection successful'))
  .catch(err =>
   console.log(err))
>>>>>>> fc54a8809c43ac001628c311b37c3f7345d83f0b


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
