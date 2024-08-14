"use client";
import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { makeMaze } from "./components/makeMaze";

export default function MainView() {
  const [maxX, setMaxX] = useState(0);
  const [maxY, setMaxY] = useState(0);
  const [mazeArr, setMazeArr] = useState([]);

  const handleMakeMaze = () => {
    makeMaze(maxX, maxY);
  };

  return (
    <Grid container>
      <Grid item>
        <Grid item container>
          <Grid item>
            <TextField
              type="number"
              variant="filled"
              value={maxX}
              onChange={(e) => setMaxX(parseInt(e.target.value))}
              sx={{ bgcolor: "white" }}
              color="error"
            ></TextField>
          </Grid>

          <Grid item>
            <TextField
              type="number"
              variant="filled"
              value={maxY}
              onChange={(e) => setMaxY(parseInt(e.target.value))}
              sx={{ bgcolor: "white" }}
            ></TextField>
          </Grid>
        </Grid>
        <Button onClick={() => handleMakeMaze()}>make Maze</Button>
      </Grid>
    </Grid>
  );
}
