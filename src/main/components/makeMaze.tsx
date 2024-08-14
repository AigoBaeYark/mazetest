import { Maze } from "../constants/mazeType";

export function makeMaze(maxX: number, maxY: number) {
  let res: Maze[][] = Array.from(new Array(maxX), () =>
    new Array(maxY).fill({ isWall: false, isView: false })
  );

  console.log(res);
  console.log(maxX);
  console.log(maxY);
  console.log(res[0][0]);
  res.forEach((y, indexY) =>
    y.forEach((x, indexX) => console.log(res[indexY][indexX]))
  );
  // for (let i = 0; i < maxX; i = i + 1) {
  //   for (let j = 0; j < maxY; j = j + 1) {
  //     res[i][j] = { isView: true, isWall: true };
  //     // logic
  //     console.log(res[i][j]);
  //   }
  // }
  console.log(res);
  return res;
}
