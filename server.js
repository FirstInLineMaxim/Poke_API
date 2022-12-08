const express = require("express");
const cors = require("cors");
const router = require("./routes/router");

// MONGOOSE
const mongoose = require('mongoose');

const uri = "mongodb+srv://StreatRazor:G8jzcGJuKBlZyfl5@pokefight.y38z2e2.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, () => {
  console.log(`DB connected with mongoose`);
}, e => console.error(e))

const port = process.env.PORT || 4444;

const app = express();

// middlewares
app.use(cors())
app.use(express.json());
app.use("/api/v1/pokemon", router)


// if no routes are matched, show this || "*" is a wildcard
app.use('*', (req, res) => res.status(404).json({error: "not found"}))



app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
