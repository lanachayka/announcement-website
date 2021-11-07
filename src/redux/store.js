import { combineReducers, createStore } from "redux";
import announcementsReducer from "./announcementsReducer";

const reducers = combineReducers({
  announcements: announcementsReducer,
});

const store = createStore(reducers);

export default store;
