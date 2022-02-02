const express = require('express');
const port = 8080;
const app = express();

app.use(express.static('client'));
app.listen(port, function () {
  console.log('server initiates on port', port);
});
