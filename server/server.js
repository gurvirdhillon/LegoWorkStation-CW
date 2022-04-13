import express from 'express';
import path from 'path';
import url from 'url';
import * as db from './db-memory.mjs';

import authConfig from './auth-config.mjs';
// import * as lego from '../client/lego.js';

const app = express();

// app.use(express.static('client', { extensions: ['html'] }));

// async function getBrick(req, res) {
//   res.JSON(await lego.listBricks());
// }

// async function getBricks(req, res) {
//   const result = await lego.findBrick();
//   if (!result) {
//     res.status(404).send('Not found');
//     return;
//   }
//   res.json(result);
// }

// async function postBricks(req, res) {
//   const bricks = await lego.addBrick(req.body.bricks);
//   res.json(bricks);
// }

// async function putBricks(req, res) {
//   const brick = await lego.editBricks(req.body.bricks);
//   res.JSON(brick);
// }

// serve the auth config publicly
app.get('/auth-config', (req, res) => {
  res.json(authConfig);
});

app.get('/api/hello', (req, res) => {
  // used to test if the extended url works.
  res.send(`Hello! The time is ${new Date()}`);
});

app.get('/api/brick', (req, res) => {
  // const brick = db.getBrick(req.query.id);
  res.send(JSON.stringify(db.getBrick(req.query.id)));
});

app.get('/api/bricks', (req, res) => {
  const bricks = db.getAllBricks();
  res.send(JSON.stringify(bricks));
});

// app.get('/api/bricks', getBricks);

// this will serve the files present in static/ inside this stage
app.use(express.static(path.join(path.dirname(url.fileURLToPath(import.meta.url)), '../client')));

// start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`please type on your browser localhost:${PORT}`);
});
