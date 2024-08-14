import { Maze } from "../constants/mazeType";

export function makeMaze(maxX: number, maxY: number) {
  let res: Maze[][] = Array.from(new Array(maxY), () =>
    new Array(maxX).fill({ isWall: false, isView: false })
  );

  console.log(res);
  console.log(maxX);
  console.log(maxY);
  console.log(res[0][0]);
  res.forEach((y, indexY) =>
    y.forEach((x, indexX) => console.log(res[indexY][indexX]))
  );
  for (let i = 0; i < maxY; i = i + 1) {
    for (let j = 0; j < maxX; j = j + 1) {
      res[i][j] = { isView: true, isWall: true };
      // logic
      console.log(res[i][j]);
    }
  }
  console.log(res);
  return res;
}
