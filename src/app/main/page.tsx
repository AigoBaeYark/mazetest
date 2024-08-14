import MainView from "@/main/mainView";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

//const store = createStore(rootReducer)

export default function Page() {
  return <MainView />;
}
