import { createStore, combineReducers, applyMiddleware, compose, } from 'redux';
import listReducer from '../reducers/list';
import itemReducer from '../reducers/item';
import createSagaMiddleware from 'redux-saga';
import saga from '../sagas';


const reducer = combineReducers({
  list: listReducer,
  item: itemReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(saga);

export default store;

