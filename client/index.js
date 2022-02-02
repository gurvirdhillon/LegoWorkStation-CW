const sqlite = require('sqlite');
const uuid = require('uuid');

async function init() {
  const db = await sqlite.open('./database.sqlite', { verbose: true });
  await db.migrate({ migrationsPath: './migration-sqlite' });
  return db;
}

const dbConnect = init();

export async function legoStock() {
  const db = await dbConnect;
  return db.get('SELECT * FROM LegoName ORDER BY legoName DESC LIMIT 50');
}

export async function findLego(id) {
  const db = await dbConnect;
  return db.get('SELECT * FROM LegoName WHERE id = ?', id);
}

export async function editLego(updateLego) {
  const db = await dbConnect;
  const id = updateLego.id;
  const lego = updateLego.msg;

  const statement = await db.run('UPDATE messages SET msg = ? , time = ? WHERE id = ?', [lego, id]);

  if (statement === 0) throw new Error('lego not found');
  return findLego(id);
}

function grabAllFuncs() {
  init();
  legoStock();
  findLego();
  editLego();
}

const id = uuid();

window.addEventListener('load', grabAllFuncs);

