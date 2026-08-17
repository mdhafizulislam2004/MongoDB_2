const express = require('express');
const app = express();
const cors = require('cors');
const port =  process.env.port ||3000;

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  res.send('MD.HAFIZUL ISLAm');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});