export const bricks = [
  { ProductId: 'brk2', ProductName: 'Blue 2 by 4', Colour: 'blue', x: 2, y: 4, ProductImage: 'img/blue2by4.jpg', ProductPrice: '£0.40', quantity: '20', type: 'brick' },
  { ProductId: 'brk1', ProductName: 'Red 2 by 4', Colour: 'red', x: 2, y: 4, ProductImage: 'img/red2by4.jpg', ProductPrice: '£0.30', quantity: '40', type: 'brick' },
  { ProductId: 'brk3', ProductName: 'Yellow 2 by 4', Colour: 'yellow', x: 2, y: 4, img: 'img/yellow2by4.jpg', ProductPrice: '£0.20', quantity: '300', type: 'brick' },
  { ProductId: 'brk4', ProductName: 'Green 2 by 4', Colour: 'green', x: 2, y: 4, ProductImage: 'img/green2by4.jpg', ProductPrice: '£0.20', quantity: '22', type: 'brick' },
  { ProductId: 'brk5', ProductName: 'Black 2 by 4', Colour: 'black', x: 2, y: 4, ProductImage: 'img/black2by4.jpg', ProductPrice: '£0.20', quantity: '91', type: 'brick' },
  { ProductId: 'brk6', ProductName: 'Green 2 by 4', Colour: 'green', x: 4, y: 4, ProductImage: 'img/green2by4c.jpg', ProductPrice: '£0.10', quantity: '51', type: 'brick' },
  { ProductId: 'brk7', ProductName: 'Red 2 by 1', Colour: 'red', x: 2, y: 2, ProductImage: 'img/red2by1.jpg', ProductPrice: '£0.05', quantity: '29', type: 'brick' },
  { ProductId: 'brk8', ProductName: 'Mixed Crate', Colour: 'All', x: 1, y: 1, ProductImage: 'img/legoCrate.jpeg', ProductPrice: '£40', quantity: '10', type: 'set' },
  { ProductId: 'brk9', ProductName: 'Bonsai!', Colour: 'All', x: 1, y: 1, ProductImage: 'img/bonsai.png', ProductPrice: '£15', quantity: '4', type: 'set' },
  { ProductId: 'brk10', ProductName: 'Lego master set', Colour: 'All', x: 1, y: 1, ProductImage: 'img/house.png', ProductPrice: '£20', quantity: '10', type: 'set' },
  { ProductId: 'brk11', ProductName: 'The education bundle', Colour: 'All', x: 1, y: 1, ProductImage: 'img/educationBundle.jpg', ProductPrice: '£30', quantity: '40', type: 'set' },
  { ProductId: 'brk12', ProductName: 'The ol\' saloon', Colour: 'All', x: 1, y: 1, ProductImage: 'img/saloon.png', ProductPrice: '£45', quantity: '5', type: 'set' },
  { ProductId: 'brk13', ProductName: 'The plane!', Colour: 'All', x: 1, y: 1, ProductImage: 'img/rocketPlane.jpg', ProductPrice: '£15', quantity: '35', type: 'set' },
  { ProductId: 'brk14', ProductName: 'The ultimate minecraft set', Colour: 'All', x: 1, y: 1, ProductImage: 'img/treehouse.jpeg', p: '£25', quantity: '5', type: 'brick' },
  { ProductId: 'brk15', ProductName: 'The victors colloseum', Colour: 'All', x: 1, y: 1, ProductImage: 'img/colloseum.jpg', ProductPrice: '£400', quantity: '2', type: 'brick' },
  { ProductId: 'brk16', ProductName: 'The Avengers X Justice League Set', Colour: 'All', x: 1, y: 1, ProductImageProductPrice: 'img/heroLego.jpg', ProductPrice: '£25', quantity: '20', type: 'brick' },
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

export function getBrick(ProductId) {
  for (const brick of bricks) {
    if (ProductId === brick.ProductId) {
      return brick;
    }
  }
  return null;
}
