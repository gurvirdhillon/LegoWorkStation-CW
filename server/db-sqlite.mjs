import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function init() {
  const db = await open({
    filename: './database.sqlite',
    verbose: true,
    driver: sqlite3.Database,
  });
  await db.migrate();
  return db;
}

const dbConn = init();

export async function getBrick(id) {
  const db = await dbConn;
  db.get('SELECT * FROM Legos WHERE id = ?', id);
}

export async function getAllBricks() {
  const db = await dbConn;
  return db.all('SELECT * FROM Legos');
}
