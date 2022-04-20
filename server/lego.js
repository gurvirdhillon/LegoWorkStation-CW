// import * as sqlite from 'sqlite';

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function init() {
  const db = await open({
    filename: './database.sqlite',
    verbose: true,
    driver: sqlite3.Database,
  });
  await db.migrate({
    migrationsPath: '../migrations-sqlite',
  });
}

// async function init() {
//   const db = await sqlite.open('./database.sqlite', { verbose: true });
//   await db.migrate({ migrationsPath: '../migrations-sqlite' });
//   return db;
// }

const dbConn = init();

export async function listBricks() {
  const db = await dbConn;
  return db.all('SELECT * FROM Legos');
}

export async function findBrick(id) {
  const db = await dbConn;
  // const dbConn = init();
  db.get('SELECT * FROM Legos WHERE id = ?', id);
}

// Code extracted from Kocepky, J., Dennis, M., & Boakes, R. (2020).
// staged-simple-message-board/stages at master · portsoc/staged-simple-message-board.
// GitHub. Retrieved from https://github.com/portsoc/staged-simple-message-board/tree/master/stages.
