const express = require("express");
const cors = require("cors");
const router = require("./routes/router");

const app = express();

const port = process.env.PORT || 4444;
app.use(cors())
app.use("/api/v1/pokemon", router)

// if no routes are matched, show this || "*" is a wildcard
app.use('*', (req, res) => res.status(404).json({error: "not found"}))

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
