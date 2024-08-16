import { Maze } from "../constants/mazeType";

const WALL_THRESHOLD = 5; // 벽이 생성될 확률을 조정할 수 있는 상수

export function makeMaze(maxX: number, maxY: number) {
  const createCell = (rand: number): Maze => ({
    isWall: rand > WALL_THRESHOLD,
    isView: false,
    isGoal: false,
  });

  const res: Maze[][] = Array.from({ length: maxX }, () =>
    Array.from({ length: maxY }, () => createCell(randomInt(10)))
  );

  const [goalX, goalY] = [randomInt(maxX), randomInt(maxY)];
  let [startX, startY] = [randomInt(maxX), randomInt(maxY)];

  while (startX === goalX) startX = randomInt(maxX);
  while (startY === goalY) startY = randomInt(maxY);

  res[goalX][goalY].isGoal = true;
  res[startX][startY].isStart = true;

  const startRoad = startingRoadCnt(maxX - 1, maxY - 1, startX, startY);
  console.log("startRoad: ", startRoad);

  res.forEach((row, indexX) =>
    row.forEach((cell, indexY) => {
      if (
        (indexX === goalX && indexY === goalY) ||
        (indexX === startX && indexY === startY)
      ) {
        return; // 골 지점과 생성 지점은 건너뜀
      }
      const rand = randomInt(10);
      cell.isWall = rand > WALL_THRESHOLD;
    })
  );

  console.log(res);
  return res;
}

const randomInt = (max: number) => Math.floor(Math.random() * max);

const startingRoadCnt = (
  maxX: number,
  maxY: number,
  startX: number,
  startY: number
) => {
  const corners = [
    [0, 0],
    [maxX, maxY],
    [maxX, 0],
    [0, maxY],
  ];
  const edges = [
    [0, 1],
    [1, 0],
    [maxX, 1],
    [maxX, maxY - 1],
    [1, maxY],
    [maxX - 1, maxY],
  ];

  if (corners.some(([x, y]) => x === startX && y === startY)) return 2;
  if (edges.some(([x, y]) => x === startX && y === startY)) return 3;
  return 4;
};
