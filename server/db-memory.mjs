const bricks = [
  { id: 'brk1', name: 'Red 2 by 4', colour: 'red', x: 2, y: 4, img: 'https://cdn.rebrickable.com/media/thumbs/sets/5006867-1/98690.jpg/1000x800p.jpg?1644691664.1593194', p: '£0.30', quantity: '40' },
  { id: 'brk2', name: 'Blue 2 by 4', colour: 'blue', x: 2, y: 4, img: 'https://cdn.rebrickable.com/media/thumbs/sets/5001266-1/7258.jpg/1000x800p.jpg?1645623923.2763107', p: '£0.40', quantity: '20' },
  { id: 'brk3', name: 'Yellow 2 by 4', colour: 'yellow', x: 2, y: 4, img: 'https://cdn.rebrickable.com/media/thumbs/sets/5001267-1/11955.jpg/1000x800p.jpg?1645680436.710979', p: '£0.20', quantity: '300' },
  { id: 'brk4', name: 'Green 2 by 4', colour: 'green', x: 2, y: 4, img: 'https://cdn.rebrickable.com/media/thumbs/sets/5001387-1/46401.jpg/1000x800p.jpg?1630222775.6672146', p: '£0.20', quantity: '22' },
  { id: 'brk5', name: 'Black 2 by 4', colour: 'black', x: 2, y: 4, img: 'https://cdn.rebrickable.com/media/thumbs/sets/5005031-1/34559.jpg/1000x800p.jpg?1644118162.8347635', p: '£0.20', quantity: '91' },
  { id: 'brk6', name: 'Green 2 by 4', colour: 'green', x: 4, y: 4, img: 'https://cdn.rebrickable.com/media/thumbs/sets/5006872-1/98575.jpg/1000x800p.jpg?1644472618.9376318', p: '£0.10', quantity: '51' },
  { id: 'brk7', name: 'Red 2 by 1', colour: 'red', x: 2, y: 2, img: 'https://cdn.rebrickable.com/media/thumbs/parts/elements/6382159.jpg/250x250p.jpg?1642547317.0880141', p: '£0.05', quantity: '29' },
  { id: 'brk8', name: 'Mixed Crate', colour: 'All', x: 1, y: 1, img: 'https://www.lego.com/cdn/cs/set/assets/blt70237dec0eef084a/10696.jpg?fit=bounds&format=jpg&quality=80&width=1056&height=1056&dpr=1', p: '£40', quantity: '10' },
  { id: 'brk9', name: 'Bonsai!', colour: 'All', x: 1, y: 1, img: 'https://www.lego.com/cdn/cs/set/assets/blta0f82238c7a41b0b/10281_alt4.png', p: '£15', quantity: '4' },
  { id: 'brk10', name: 'Lego master set', colour: 'All', x: 1, y: 1, img: 'https://www.lego.com/cdn/cs/set/assets/blt62f99776b13a8e94/10297.png', p: '£20', quantity: '10' },
  { id: 'brk11', name: 'The education bundle', colour: 'All', x: 1, y: 1, img: 'https://m.media-amazon.com/images/I/913of9-AzGL._AC_SL1500_.jpg', p: '£30', quantity: '40' },
  { id: 'brk12', name: 'The ol\' saloon', colour: 'All', x: 1, y: 1, img: 'https://images.brickset.com/sets/large/10270-1.jpg?201912060155', p: '£45', quantity: '5' },
  { id: 'brk13', name: 'The plane!', colour: 'All', x: 1, y: 1, img: 'https://image.smythstoys.com/picture/desktop/175255.jpg', p: '£15', quantity: '35' },
  { id: 'brk14', name: 'The ultimate minecraft set', colour: '', x: 1, y: 1, img: 'https://www.lego.com/cdn/cs/set/assets/blt80c15b943de11110/21174.jpg?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1', p: '£25', quantity: '5' },
  { id: 'brk15', name: 'The victors colloseum', colour: 'All', x: 1, y: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBrcOj8mpzGMMJSi7LIibOyaCqP4Nhrw3DeA&usqp=CAU', p: '£400', quantity: '2' },
];

// extracted from https://rebrickable.com/
// extracted from https://www.lego.com/en-gb

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
