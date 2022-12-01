const express = require("express");
const cors = require("cors");
const router = require("./routes/router");

const app = express();

const port = process.env.PORT || 4444;
app.use(cors())
app.use("/api/v1/pokemon", router)


app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
