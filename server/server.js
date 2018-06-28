const express = require('express');
const path = require('path');
const app = express()
  .use(express.static( path.join(__dirname, '../h707035441.nichost.ru/docs') ))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .get('/', (req, res) => {res.sendFile( path.join(__dirname, '/../h707035441.nichost.ru/docs/index.html') )});


const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server listening on ${ PORT }`);
});