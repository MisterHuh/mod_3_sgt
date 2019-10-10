// Build middleware here
export default (store) => (next) => (action) => {
  if(typeof action !== "function") {
    return next(action);
  }
  return action(store.dispatch);
}

/* es5 version */
// function thunk(store) {
//   return function(next) {
//     return function(action)
//   }
// }

// thunk(reduxStore)(nextFunction)(action)
