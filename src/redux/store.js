import { createStore, applyMiddleware } from "redux";

import logger from 'redux-logger';
import rootReducer from "./root-reducer";
import {persistStore} from 'redux-persist';

const middleweares = [];
if (process.env.NODE_ENV === "development"){
    middleweares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleweares));
export const persistor = persistStore(store);
