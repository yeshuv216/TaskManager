import { combineReducers } from "redux";
import tasksReducer from "./tasksReducer";
import categoryReducer from "./categoryReducer";
import queryReducer from "./queryReducer";

const rootReducer = combineReducers({
  categoryReducer,
  tasksReducer,
  queryReducer
});

export default rootReducer;