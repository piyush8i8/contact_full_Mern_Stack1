const express = require("express");
const cors = require("cors");
require("./connection");
const contact = require("./route");
const Schemamodel = require("./Schemamodel");

const app = express();
const port = 4000;

// Use CORS middleware before routes
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

app.use("/api/c", contact);

// Define a route for GET request
app.get("/getUsers", (req, res) => {
  Schemamodel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
