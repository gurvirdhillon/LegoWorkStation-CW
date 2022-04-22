import { init } from './db-sqlite.mjs';

const dbConn = init();

export async function getAllBricks() {
  const db = await dbConn;
  return db.all('SELECT * FROM Legos');
}

export async function getBrick(id) {
  const db = await dbConn;
  // const dbConn = init();
  db.get('SELECT * FROM Legos WHERE id = ?', id);
}
