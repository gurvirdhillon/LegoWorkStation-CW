export const bricks = [
  { id: 'brk1', name: 'Red 2 by 4', colour: 'red', x: 2, y: 4, img: 'img/red2by4.jpg', p: '£0.30', quantity: '40', type: 'brick', count: 0 },
  { id: 'brk2', name: 'Blue 2 by 4', colour: 'blue', x: 2, y: 4, img: 'img/blue2by4.jpg', p: '£0.40', quantity: '20', type: 'brick', count: 0 },
  { id: 'brk3', name: 'Yellow 2 by 4', colour: 'yellow', x: 2, y: 4, img: 'img/yellow2by4.jpg', p: '£0.20', quantity: '300', type: 'brick', count: 0 },
  { id: 'brk4', name: 'Green 2 by 4', colour: 'green', x: 2, y: 4, img: 'img/green2by4.jpg', p: '£0.20', quantity: '22', type: 'brick', count: 0 },
  { id: 'brk5', name: 'Black 2 by 4', colour: 'black', x: 2, y: 4, img: 'img/black2by4.jpg', p: '£0.20', quantity: '91', type: 'brick', count: 0 },
  { id: 'brk6', name: 'Green 2 by 4', colour: 'green', x: 4, y: 4, img: 'img/green2by4c.jpg', p: '£0.10', quantity: '51', type: 'brick', count: 0 },
  { id: 'brk7', name: 'Red 2 by 1', colour: 'red', x: 2, y: 2, img: 'img/red2by1.jpg', p: '£0.05', quantity: '29', type: 'brick', count: 0 },
  { id: 'brk8', name: 'Mixed Crate', colour: 'All', x: 1, y: 1, img: 'img/legoCrate.jpeg', p: '£40', quantity: '10', type: 'set', count: 0 },
  { id: 'brk9', name: 'Bonsai!', colour: 'All', x: 1, y: 1, img: 'img/bonsai.png', p: '£15', quantity: '4', type: 'set', count: 0 },
  { id: 'brk10', name: 'Lego master set', colour: 'All', x: 1, y: 1, img: 'img/house.png', p: '£20', quantity: '10', type: 'set', count: 0 },
  { id: 'brk11', name: 'The education bundle', colour: 'All', x: 1, y: 1, img: 'img/educationBundle.jpg', p: '£30', quantity: '40', type: 'set', count: 0 },
  { id: 'brk12', name: 'The ol\' saloon', colour: 'All', x: 1, y: 1, img: 'img/saloon.png', p: '£45', quantity: '5', type: 'set', count: 0 },
  { id: 'brk13', name: 'The plane!', colour: 'All', x: 1, y: 1, img: 'img/rocketPlane.jpg', p: '£15', quantity: '35', type: 'set', count: 0 },
  { id: 'brk14', name: 'The ultimate minecraft set', colour: 'All', x: 1, y: 1, img: 'img/treehouse.jpeg', p: '£25', quantity: '5', type: 'brick', count: 0 },
  { id: 'brk15', name: 'The victors colloseum', colour: 'All', x: 1, y: 1, img: 'img/colloseum.jpg', p: '£400', quantity: '2', type: 'brick', count: 0 },
  { id: 'brk16', name: 'The Avengers X Justice League Set', colour: 'All', x: 1, y: 1, img: 'img/heroLego.jpg', p: '£25', quantity: '20', type: 'brick', count: 0 },
];

// // save price as pence.
// // use the backtick and £ sign when implementing into a db
// // price / 100 = get price
// // store whatever you have in here in a database

// // brick images extracted from https://rebrickable.com/
// // brick images extracted from https://www.lego.com/en-gb

// export function getAllBricks() {
//   return bricks;
// }

// export function getBrick(ProductId) {
//   for (const brick of bricks) {
//     if (ProductId === brick.ProductId) {
//       return brick;
//     }
//   }
//   return null;
// }
