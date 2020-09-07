// server.js
// where your node app starts

// init project
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");
const { createPogoImage } = require('./pogo');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

const port = process.env.PORT || 3000;

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

app.get('/demo', (req, res) => {
  res.sendFile(`${__dirname}/views/demo.html`);
});

app.get('/:name/:code', async (req, res) => {
  const { name, code } = req.params;
  
  const style = req.query['style'];

  if (!name || !code || code.length !== 12 ) {
    res.set({
      'content-type': 'image/svg+xml',
      'cache-control': 'max-age=0, no-cache, no-store, must-revalidate'
    });

    return fs.createReadStream('./public/404.svg').pipe(res);
  }

  
  return await createPogoImage(res, name, code, style);
});


// listen for requests :)
var listener = app.listen(port, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});