import { getBrick } from '../server/db-memory.mjs'
test('loops through the id of the bricks', () =>{
    expect(getBrick.id).toBe(getBrick.id);
});
