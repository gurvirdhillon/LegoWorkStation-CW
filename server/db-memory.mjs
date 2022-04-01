const bricks = [
  { id: 'brk1', name: 'Red 2 by 4', colour: 'red', x: 2, y: 4, img: 'img/red2by4.jpg', p: '£0.30', quantity: '40', type: 'brick' },
  { id: 'brk2', name: 'Blue 2 by 4', colour: 'blue', x: 2, y: 4, img: 'img/blue2by4.jpg', p: '£0.40', quantity: '20', type: 'brick' },
  { id: 'brk3', name: 'Yellow 2 by 4', colour: 'yellow', x: 2, y: 4, img: 'img/yellow2by4.jpg', p: '£0.20', quantity: '300', type: 'brick' },
  { id: 'brk4', name: 'Green 2 by 4', colour: 'green', x: 2, y: 4, img: 'img/green2by4.jpg', p: '£0.20', quantity: '22', type: 'brick' },
  { id: 'brk5', name: 'Black 2 by 4', colour: 'black', x: 2, y: 4, img: 'img/black2by4.jpg', p: '£0.20', quantity: '91', type: 'brick' },
  { id: 'brk6', name: 'Green 2 by 4', colour: 'green', x: 4, y: 4, img: 'img/green2by4c.jpg', p: '£0.10', quantity: '51', type: 'brick' },
  { id: 'brk7', name: 'Red 2 by 1', colour: 'red', x: 2, y: 2, img: 'img/red2by1.jpg', p: '£0.05', quantity: '29', type: 'brick' },
  { id: 'brk8', name: 'Mixed Crate', colour: 'All', x: 1, y: 1, img: 'img/legoCrate.jpeg', p: '£40', quantity: '10', type: 'set' },
  { id: 'brk9', name: 'Bonsai!', colour: 'All', x: 1, y: 1, img: 'img/bonsai.png', p: '£15', quantity: '4', type: 'set' },
  { id: 'brk10', name: 'Lego master set', colour: 'All', x: 1, y: 1, img: 'img/house.png', p: '£20', quantity: '10', type: 'set' },
  { id: 'brk11', name: 'The education bundle', colour: 'All', x: 1, y: 1, img: 'img/educationBundle.jpg', p: '£30', quantity: '40', type: 'set' },
  { id: 'brk12', name: 'The ol\' saloon', colour: 'All', x: 1, y: 1, img: 'img/saloon.png', p: '£45', quantity: '5', type: 'set' },
  { id: 'brk13', name: 'The plane!', colour: 'All', x: 1, y: 1, img: 'img/rocketPlane.jpg', p: '£15', quantity: '35', type: 'set' },
  { id: 'brk14', name: 'The ultimate minecraft set', colour: 'All', x: 1, y: 1, img: 'img/treehouse.jpeg', p: '£25', quantity: '5', type: 'brick' },
  { id: 'brk15', name: 'The victors colloseum', colour: 'All', x: 1, y: 1, img: 'img/colloseum.jpg', p: '£400', quantity: '2', type: 'brick' },
];
// save price as pence.
// use the backtick and £ sign when implementing into a db
// price / 100 = get price
// store whatever you have in here in a database

// brick images extracted from https://rebrickable.com/
// brick images extracted from https://www.lego.com/en-gb

export function getAllBricks() {
  return bricks;
}

export function getBrick(id) {
  for (const brick of bricks) {
    if (id === brick.id) {
      return brick;
    }
  }
  return null;
}

// const db2 = [
//   { id: 'brk16', name: 'blue 2 by 2 brick', colour: 'blue', x: 2, y: 2, img: 'https://static.turbosquid.com/Preview/2019/05/23__08_00_58/Lego_Brick_2x2_Dark_Azur_thumbnail_Square_0000.jpgADD1F740-B5A1-4226-9FEE-6E6F7DCA2FE6Large.jpg', p: '£', quantity: '40' },
//   { id: 'brk17', name: 'cabinet brick', colour: 'blue', x: 2, y: 2, img: 'https://www.lego.com/cdn/cs/set/assets/blt1b165be7adfb300f/5005403_alt2.jpg', p: '£0.50', quantity: '40' },
//   { id: 'brk18', name: '', colour: '', x: 2, y: 2, img: '', p: '£', quantity: '' },
// ];
