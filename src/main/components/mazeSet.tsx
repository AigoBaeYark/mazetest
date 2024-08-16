import { Grid, Typography } from "@mui/material";
import { Maze } from "../constants/mazeType";
import { useEffect, useState } from "react";

interface Props {
  maze: Maze[][];
}

export default function MazeSet({ maze }: Props) {
  let [maxX, maxY] = [maze.length - 1, maze[0].length - 1];

  const findStart = (): [number, number] => {
    for (let indexX = 0; indexX < maze.length; indexX++) {
      const indexY = maze[indexX].findIndex((cell) => cell.isStart);
      if (indexY !== -1) {
        return [indexX, indexY];
      }
    }
    return [0, 0];
  };

  const [start, setStart] = useState<[number, number]>(findStart());

  // 이동 가능한지 확인하는 함수
  const canMove = (x: number, y: number): boolean => {
    if (x < 0 || y < 0 || x > maxX || y > maxY) return false;
    console.log("can move: ", maze[x][y]);
    console.log("x y: ", x, y);
    return x >= 0 && x <= maxX && y >= 0 && y <= maxY && !maze[x][y].isWall;
  };

  // 키 이벤트 핸들러
  const handleKeyDown = (e: KeyboardEvent) => {
    setStart((prevStart) => {
      let [x, y] = prevStart;

      switch (e.key) {
        case "ArrowRight":
          if (canMove(x + 1, y)) {
            x++;
            console.log(`Move right to: ${x}, ${y}`);
          }
          break;
        case "ArrowLeft":
          if (canMove(x - 1, y)) {
            x--;
            console.log(`Move left to: ${x}, ${y}`);
          }
          break;
        case "ArrowUp":
          if (canMove(x, y - 1)) {
            y--;
            console.log(`Move up to: ${x}, ${y}`);
          }
          break;
        case "ArrowDown":
          if (canMove(x, y + 1)) {
            y++;
            console.log(`Move down to: ${x}, ${y}`);
          }
          break;
      }

      return [x, y];
    });
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [maze]); // `start` 의존성을 제거하여 키보드 이벤트 리스너가 한번만 추가되도록 함

  useEffect(() => {
    setStart(findStart());
    [maxX, maxY] = [maze.length - 1, maze[0].length - 1];
  }, [maze]);

  return (
    <Grid container spacing={1}>
      {maze.map((row, indexX) => (
        <Grid item xs key={indexX}>
          {row.map((cell, indexY) => (
            <Typography
              key={`${indexX}-${indexY}`}
              sx={{
                color: cell.isGoal ? "red" : cell.isStart ? "green" : "black",
                bgcolor:
                  indexY === start[1] && indexX === start[0]
                    ? "grey"
                    : "transparent",
              }}
            >
              {cell.isGoal
                ? "Goal"
                : cell.isStart
                ? "Start"
                : cell.isWall
                ? "Wall"
                : "Road"}
            </Typography>
          ))}
        </Grid>
      ))}
    </Grid>
  );
}
