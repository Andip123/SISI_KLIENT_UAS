import { createStore, combineReducers } from "redux";
import penyuluhanReducer from "./reducers/penyuluhanReducer";
import pemantauanReducer from "./reducers/pemantauanReducer";

const rootReducer = combineReducers({
  penyuluhan: penyuluhanReducer,
  pemantauan: pemantauanReducer,
});

const store = createStore(rootReducer);

export default store;
