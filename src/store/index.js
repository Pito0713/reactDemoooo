import {createStore} from "redux";
import {itemReducer} from "./watch";

const store = createStore(itemReducer); 

export {store};