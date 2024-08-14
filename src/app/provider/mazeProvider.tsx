"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, MazeStore } from "@/lib/main/store/store";

export default function MazeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const mazeRef = useRef<MazeStore>();
  if (!mazeRef.current) {
    // create the store instance the firest time this renders
    mazeRef.current = makeStore();
  }
  return <Provider store={mazeRef.current}>{children}</Provider>;
}
