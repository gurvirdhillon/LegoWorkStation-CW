import { getBrick } from '../server/db-memory.mjs'
test('loops through the id of the bricks', () =>{
    expect(getBrick.id).toBe(getBrick.id);
});

// import { addProductToCart } from '../client/localStorage.mjs';
// test('adds a brick to the cart', () =>{
//     expect(addProductToCart.id).toBe(addProductToCart.id);
// });
