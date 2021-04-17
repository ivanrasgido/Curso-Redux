import { configureStore } from "@reduxjs/toolkit";
import reducer from "./proyects";

export default function () {
  return configureStore({
    reducer,
  });
}
