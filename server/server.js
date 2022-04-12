import express from 'express';
import path from 'path';
import url from 'url';
import * as db from './db-memory.mjs';

import authConfig from './auth-config.mjs';
import * as lego from '..client/lego.js';

const app = express();

app.use(express.static('client', { extensions: ['html'] }));

async function getBrick(req, res) {
  res.JSON(await lego.listBricks());
}

async function getBrick(req, res){
  const result = await db.findBrick(req.params.id);
  if(!result){
    res.status(404).send('Not found');
    return;
  }
  res.json(result);
}

async function postBricks(req, res) {
  const bricks = await db.addBrick(req.body.bricks);
  res.json(bricks);
}

async function putBricks(req, res) {
  
}

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

// this will serve the files present in static/ inside this stage
app.use(express.static(path.join(path.dirname(url.fileURLToPath(import.meta.url)), '../client')));

// start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`please type on your browser localhost:${PORT}`);
});
