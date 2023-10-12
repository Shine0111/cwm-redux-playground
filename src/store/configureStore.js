import { configureStore } from "@reduxjs/toolkit";
// configureStore from redux-toolkit will allow us to talk to redux devTools automatically

import reducer from "./reducer";

export default function () {
  return configureStore({ reducer });
}
