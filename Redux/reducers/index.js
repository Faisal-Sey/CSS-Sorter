import { combineReducers } from "redux";
import storeFileReducer from "./StoreFileReducer";

const rootReducer = combineReducers({
    file: storeFileReducer
});

export default rootReducer;
