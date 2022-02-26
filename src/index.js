let bricks;
export function getBrick(id) {
  for (const brick of bricks) {
    if (id === brick.id) {
      return brick;
    }
  }
  return null;
}
