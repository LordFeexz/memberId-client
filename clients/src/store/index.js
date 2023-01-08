import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { awardReducer } from "../reducer/award";

export const store = createStore(awardReducer, applyMiddleware(thunk));
