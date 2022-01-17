import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./features/Jobs/reducer";

export const store = createStore(reducer, applyMiddleware(thunk));