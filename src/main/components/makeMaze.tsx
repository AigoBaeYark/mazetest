import { Maze } from "../constants/mazeType";

export function makeMaze(maxX: number, maxY: number) {
  let res: Maze[][] = Array.from(new Array(maxX), () =>
    new Array(maxY).fill({ isWall: false, isView: false, isGoal: false })
  );

  const goalX = Math.floor(reRoll() % maxX);
  const goalY = Math.floor(reRoll() % maxY);
  console.log(`goalX: ${goalX}, goalY: ${goalY}`);

  let startX = Math.floor(reRoll() % maxX);
  while (startX === goalX) startX = Math.floor(reRoll() % maxX);
  let startY = Math.floor(reRoll() % maxY);
  while (startY === goalY) startY = Math.floor(reRoll() % maxY);
  console.log(`startX: ${startX}, startY: ${startY}`);

  res[startX][startY].isStart = true;

  res.forEach((y, indexY) =>
    y.forEach((x, indexX) => {
      const rand =
        Math.floor(Math.random() * new Date().getTime() * Math.random()) % 10;
      if (indexY === goalY && indexX === goalX) {
        x.isGoal = true;
      } else if (indexY === startY && indexX === startX) {
        x.isStart = true;
      } else if (rand > 5) {
        res[indexY][indexX] = { isWall: true, isView: false };
      } else {
        res[indexY][indexX] = { isWall: false, isView: false };
      }
    })
  );

  res.forEach((y, indexY) => y.forEach((x, indexX) => x));
  console.log(res);
  return res;
}

const reRoll = () => {
  return Math.random() * new Date().getTime();
};
