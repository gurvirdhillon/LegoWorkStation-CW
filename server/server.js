import express from 'express';
import path from 'path';
import url from 'url';
// import * as db from './db-memory.mjs';
import * as db from './db-sqlite.mjs';
import authConfig from './auth-config.mjs';
import * as lego from './lego.js';

const app = express();

app.use(express.static('client', { extensions: ['html'] }));

async function getBricks(req, res) {
  res.JSON(await lego.listBricks());
}

async function getBrick(req, res) {
  const result = await lego.findBrick(req.params.id);
  if (!result) {
    res.status(404).send('Not found');
    return;
  }
  res.json(result);
}

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

app.get('/api/bricks', asyncWrap(async (req, res) => {
  const bricks = await db.getAllBricks();
  res.send(JSON.stringify(bricks));
}));

// app.get('/api/brick/showItems', (req, res) => {
//   res.send(JSON.stringify(db.getBrick(req.query.id)));
// });

function asyncWrap(f) {
  return (req, res, next) => {
    Promise.resolve(f(req, res, next))
      .catch((e) => next(e || new Error()));
  };
}

app.get('/api/bricks', asyncWrap(getBricks));
app.get('/api/bricks/:id', asyncWrap(getBrick));
// app.get('/api/bricks/:id', asyncWrap(postBricks));
// app.put('/api/bricks/:id', asyncWrap(putBricks));

// app.get('/api/bricks', getBricks);

// this will serve the files present in static/ inside this stage
app.use(express.static(path.join(path.dirname(url.fileURLToPath(import.meta.url)), '../client')));

// start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`please type on your browser localhost:${PORT}`);
});
