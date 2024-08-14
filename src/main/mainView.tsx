"use client";
import { Button, Grid, Input, TextField } from "@mui/material";
import { useState } from "react";
import { makeMaze } from "./components/makeMaze";

export default function MainView() {
  const [maxX, setMaxX] = useState(1);
  const [maxY, setMaxY] = useState(1);
  const [mazeArr, setMazeArr] = useState([]);

  const handleMakeMaze = () => {
    makeMaze(maxX, maxY);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid item container spacing={2}>
          <Grid item xs={4}>
            <Input
              fullWidth
              type="number"
              value={maxX}
              onChange={(e) => setMaxX(parseInt(e.target.value))}
              sx={{ bgcolor: "white" }}
              color="error"
              slotProps={{ input: { min: 1, max: 10 } }}
            ></Input>
          </Grid>

          <Grid item xs={4}>
            <Input
              fullWidth
              type="number"
              value={maxY}
              onChange={(e) => setMaxY(parseInt(e.target.value))}
              sx={{ bgcolor: "white" }}
              slotProps={{ input: { min: 1, max: 10 } }}
            ></Input>
          </Grid>
        </Grid>
        <Button onClick={() => handleMakeMaze()}>make Maze</Button>
      </Grid>
    </Grid>
  );
}
