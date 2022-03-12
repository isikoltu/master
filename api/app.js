var config = require('../api/config')

const express = require('express')
const app = express()
const port = config.port

const generic = require('./routers/generic_router');
app.use('/', generic);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})