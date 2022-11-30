const express = require('express');
const cors = require('cors')
const router = require('./routes/router')

const app = express();


const port = process.env.PORT || 4444;



app.use('/api/v1/pokemon', router, (req, res, next) => {
 const err = new Error("Bad Gateway")
 err.status = 404
 next(err)
})




app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    error: {
      status: err.status || 500,
      message: err.message
    }
  })
})


app.listen(port, () => {
  console.log(`Running on port ${port}`);
})

