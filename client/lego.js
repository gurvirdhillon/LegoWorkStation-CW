import * as sqlite from 'sqlite';

async function init() {
  const db = await sqlite.open('./database.sqlite', { verbose: true });
  await db.migrate({ migrationsPath: './migrations-sqlite' });
  return db;
}


export async function listBricks() {
  const dbConn = init();
  const db = await dbConn;
  return db.all('SELECT * FROM bricks');
}

export async function findBrick(id) {
  const dbConn = init();
  const db = await dbConn;
  db.get('SELECT * FROM bricks WHERE id = ?', id);
}

export async function addBrick(brick) {
  const dbConn = init();
  const db = await dbConn;
  await db.run('INSERT INTO bricks (name, img, p, colour, quantity) VALUES (?, ?, ?, ?, ?)');
  return listBricks();
}

export async function editBricks(updateBricks) {
  const dbConn = init();
  const db = await dbConn;
  const id = updateBricks.id;
  const name = updateBricks.name;

  const statement = await db.run('UPDATE Bricks SET brick = ? WHERE id = ?', [name, id]);

  if (statement.changes === 0) {
    throw new Error('No bricks found');
  }
  return findBrick(id);
}
