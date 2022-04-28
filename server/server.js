import express from 'express';
import path from 'path';
import url from 'url';
// import * as db from './db-memory.mjs';
import * as db from './db-sqlite.mjs';
import authConfig from './auth-config.mjs';
const app = express();
app.use(express.static('client', { extensions: ['html'] }));

// async function getBricks(req, res) {
//   res.JSON(await db.getAllBricks());
// }

async function gb2(req, res) {
  const bricks = await db.getAllBricks();
  res.send(JSON.stringify(bricks));
}

async function getBrick(req, res) {
  const result = await db.getBrick(req.params.ProductId);
  if (!result) {
    res.status(404).send('Not found');
    return;
  }
  res.json(result);
}

// serve the auth config publicly
app.get('/auth-config', (req, res) => {
  res.json(authConfig);
});

// app.get('/api/brick', (req, res) => {
//   const brick = db.getBrick(req.query.id);
//   res.send(JSON.stringify(brick));
// });

// app.get('/api/brick', (req, res) => {
// res.send(JSON.stringify((db.getBrick(req.query.id))));
// const brick = db.getBrick(req.query.id);
// res.send(JSON.stringify(db.getBrick(req.query.ProductId)));
// });

app.get('/api/brick/:ProductId', asyncWrap(async (req, res) => {
  // const bricks = await db.gtAllBricks();
  // res.send(JSON.stringify(bricks));
  const result = await db.getBrick(req.params.ProductId);
  // const result = res.send(JSON.stringify(await db.getBrick(req.query.id)));
  if (!result) {
    res.status(404).send('Not found');
    return;
  }
  res.JSON(result);
}));

// app.get(`/api/brick?id=${db.ProductID}`, asyncWrap(async (req, res) => {
//   const brick = await db.getBrick(req.query.id);
//   res.send(JSON.stringify(brick));
// }));
function asyncWrap(f) {
  return (req, res, next) => {
    Promise.resolve(f(req, res, next))
      .catch((e) => next(e || new Error()));
  };
}
// app.get('/api/bricks', asyncWrap(getBricks));

async function getOrders(req, res) {
  const legoBricks = await db.updateStock(req.query.id, req.query.count);
  res.JSON(legoBricks);
}

app.get('/api/bricks', asyncWrap(gb2));
app.put('/bricks/bought/:ProductId', express.json(), asyncWrap(getOrders));

app.get('/api/bricks/:ProductId', asyncWrap(getBrick));
// this will serve the files present in static/ inside this stage
app.use(express.static(path.join(path.dirname(url.fileURLToPath(import.meta.url)), '../client')));
// start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`please type on your browser localhost:${PORT}`);
});
