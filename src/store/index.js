import { createStore, combineReducers } from "redux";
import {itemReducer} from "./watch";

const itemDATA = combineReducers({
    itemReducer,
});

const store = createStore(itemDATA); 

export {store};