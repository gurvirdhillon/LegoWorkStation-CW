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

// export async function addBrick(brick) {
//   const db = await dbConn;
//   // const dbConn = init();
//   await db.run('INSERT INTO bricks (name, img, p, colour, quantity) VALUES (?, ?, ?, ?, ?)');
//   return listBricks();
// }

// export async function editBricks(updateBricks) {
//   const dbConn = init();
//   const id = updateBricks.id;
//   const name = updateBricks.name;

//   const statement = await db.run('UPDATE Bricks SET brick = ? WHERE id = ?', [name, id]);

//   if (statement.changes === 0) {
//     throw new Error('No bricks found');
//   }
//   return findBrick(id);
// }

// Code extracted from Kocepky, J., Dennis, M., & Boakes, R. (2020).
// staged-simple-message-board/stages at master · portsoc/staged-simple-message-board.
// GitHub. Retrieved from https://github.com/portsoc/staged-simple-message-board/tree/master/stages.
