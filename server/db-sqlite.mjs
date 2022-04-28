import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
// import { uuid } from 'uuid';

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

export async function getBrick(ProductId) {
  const db = await dbConn;
  return db.get('SELECT * FROM Legos WHERE productId = ?', ProductId);
}

export async function getAllBricks() {
  const db = await dbConn;
  return db.all('SELECT * FROM Legos');
}

// export async function addBrick(brk) {
//   const db = await dbConn;
//   const id = uuid();
//   await db.run('INSERT INTO Legos VALUES(?), [id]');
//   return getAllBricks();
// }

// suteki, t. (2022). sqlite. npm.com. Retrieved 20 April 2022, from
// https://www.npmjs.com/package/sqlite#install-sqlite.

// Code extracted from Kocepky, J., Dennis, M., & Boakes, R. (2020).
// staged-simple-message-board/stages at master · portsoc/staged-simple-message-board.
// GitHub. Retrieved from https://github.com/portsoc/staged-simple-message-board/tree/master/stages.
