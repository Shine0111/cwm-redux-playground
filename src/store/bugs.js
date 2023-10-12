import { createAction } from "@reduxjs/toolkit";

export const bugUpdated = createAction("bugUpdated");
export const bugAdded = createAction("bugAdded");
export const bugResolved = createAction("bugResolved");
export const bugRemoved = createAction("bugRemoved");

// reducer
let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case bugAdded.type:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case bugResolved.type:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolve: true }
      );
    case bugRemoved.type:
      return state.filter((bug) => bug.id !== action.payload.id);
    default:
      return state;
  }
}
