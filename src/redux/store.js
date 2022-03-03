import { createStore, applyMiddleware } from "redux";

import logger from 'redux-logger';
import rootReducer from "./root-reducer";
import {persistStore} from 'redux-persist';

const middleweares = [logger];
export const store = createStore(rootReducer, applyMiddleware(...middleweares));
export const persistor = persistStore(store);
