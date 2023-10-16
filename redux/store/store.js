import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";

import rootReducers from "../reducers/rootreducer";


const makeStore = createStore(rootReducers);

export default makeStore;



