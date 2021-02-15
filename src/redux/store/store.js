import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
/*import createSagaMiddleware from 'redux-saga';*/

import appReducers from "../reducer/index";
/*import rootSaga from '../saga/index';*/

/*const sagaMiddleware = createSagaMiddleware();*/
const configStore = createStore(appReducers, {}, composeWithDevTools(applyMiddleware()));
/*sagaMiddleware.run(rootSaga);*/

export default configStore;