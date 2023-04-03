import { legacy_createStore as createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

export default store;

// Store consumes all the reducers and is accessible via actions and reducers throughout the project.
//You can change or get the values of store from any component in the project.
