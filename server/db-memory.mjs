const bricks = [
  { id: 'brk1', name: 'Red 2 by 4', colour: 'red', x: 2, y: 4, img: 'https://m.media-amazon.com/images/I/61+2OyzvFQL._AC_SL1095_.jpg', p: '£0.30', quantity: '40' },
  { id: 'brk2', name: 'Blue 2 by 4', colour: 'blue', x: 2, y: 4, img: 'https://fydn.imgix.net/m%2FPJ-3305-32_P1.jpg?auto=format%2Ccompress&q=75', p: '£0.40', quantity: '20' },
  { id: 'brk3', name: 'Yellow 2 by 4', colour: 'yellow', x: 2, y: 4, img: 'https://www.redcandy.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/l/e/lego-storage-brick-8-yellow-1.1575472405.jpg', p: '£0.20', quantity: '300' },
  { id: 'brk4', name: 'Green 2 by 4', colour: 'green', x: 2, y: 4, img: 'https://static.turbosquid.com/Preview/2019/05/23__08_00_58/Lego_Brick_2x4_Earth_Green_thumbnail_Square_0000.jpg4A94DF21-68B6-4062-976F-22BD4D4B249ALarge.jpg', p: '£0.20', quantity: '22' },
  { id: 'brk5', name: 'Black 2 by 4', colour: 'black', x: 2, y: 4, img: 'https://fydn.imgix.net/m%2FPJ-3305-23_P1.jpg?auto=format%2Ccompress&q=75', p: '£0.20', quantity: '91' },
  { id: 'brk6', name: 'Green 2 by 4', colour: 'green', x: 4, y: 4, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMvhMQzkvA1m8MesmNCbYhXbTsgWjsTTEgPQ&usqp=CAU', p: '£0.10', quantity: '51' },
  { id: 'brk7', name: 'Red 2 by 1', colour: 'red', x: 2, y: 2, img: 'https://img.brickowl.com/files/image_cache/larger/lego-dark-red-brick-1-x-2-3004-32-442413-56.jpg', p: '£0.05', quantity: '29' },
  { id: 'brk8', name: 'Mixed Crate', colour: 'All', x: 1, y: 1, img: 'https://www.lego.com/cdn/cs/set/assets/blt70237dec0eef084a/10696.jpg?fit=bounds&format=jpg&quality=80&width=1056&height=1056&dpr=1', p: '£40', quantity: '10' },
  { id: 'brk9', name: 'Bonsai!', colour: 'All', x: 1, y: 1, img: 'https://www.lego.com/cdn/cs/set/assets/blta0f82238c7a41b0b/10281_alt4.png', p: '£15', quantity: '4' },
  { id: 'brk10', name: 'Lego master set', colour: 'All', x: 1, y: 1, img: 'https://www.lego.com/cdn/cs/set/assets/blt62f99776b13a8e94/10297.png', p: '£20', quantity: '10' },
  { id: 'brk11', name: 'The education bundle', colour: 'All', x: 1, y: 1, img: 'https://m.media-amazon.com/images/I/913of9-AzGL._AC_SL1500_.jpg', p: '£30', quantity: '40' },
  { id: 'brk12', name: 'The ol\' saloon', colour: 'All', x: 1, y: 1, img: 'https://images.brickset.com/sets/large/10270-1.jpg?201912060155', p: '£45', quantity: '5' },
  { id: 'brk13', name: 'The plane!', colour: 'All', x: 1, y: 1, img: 'https://image.smythstoys.com/picture/desktop/175255.jpg', p: '£15', quantity: '35' },
  { id: 'brk14', name: 'The ultimate minecraft set', colour: '', x: 1, y: 1, img: 'https://www.lego.com/cdn/cs/set/assets/blt80c15b943de11110/21174.jpg?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1', p: '£25', quantity: '5' },
  { id: 'brk15', name: 'The victors colloseum', colour: 'All', x: 1, y: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBrcOj8mpzGMMJSi7LIibOyaCqP4Nhrw3DeA&usqp=CAU', p: '£400', quantity: '2' },
];


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

