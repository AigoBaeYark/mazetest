import { Grid, Typography } from "@mui/material";
import { Maze } from "../constants/mazeType";

interface Props {
  maze: Maze[][];
}

export default function MazeSet({ maze }: Props) {
  return (
    <Grid container spacing={1}>
      {maze.map((y, indexY) => (
        <Grid item key={`${indexY}`}>
          {y.map((x, indexX) => (
            <Typography key={`${indexX}-${indexY}`}>
              {x.isWall ? "wall" : "road"}
            </Typography>
          ))}
        </Grid>
      ))}
    </Grid>
  );
}
