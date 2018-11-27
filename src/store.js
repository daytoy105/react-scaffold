import thunk from 'redux-thunk'
import {
  createLogger
} from 'redux-logger'
import {
  createStore,
  applyMiddleware
} from 'redux'
import {
  combineReducers
} from 'redux-immutable'
import index from './reducers/index.js'
const logger = createLogger()
const middlewares = [thunk, logger] //比如，logger就一定要放在最后，否则输出结果会不正确。
const configureStore = () => {
  const store = createStore(
    index,
    applyMiddleware(...middlewares)
  );
  return store;
}

export default configureStore
