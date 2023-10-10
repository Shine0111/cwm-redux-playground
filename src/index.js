import store from "./store";
console.log(store);
import { bugAdded, bugResolved } from "./actions";

// const unsubscribe = store.subscribe(() => {
//   console.log("Store changed", store.getState());
// });

store.dispatch(bugAdded("Bug1"));
store.dispatch(bugResolved(1));

// unsubscribe();

// store.dispatch({
//   type: actions.BUG_REMOVED,
//   payload: {
//     id: 1,
//   },
// });

console.log(store.getState());
