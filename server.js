const express = require('express');
const cors = require('cors')
const router = require('./routes/router')

const app = express();



app.use('/api/v1/pokemon', router)


const port = process.env.PORT || 4444;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
})

