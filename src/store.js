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
// 调用日志打印方法
const loggerMiddleware = createLogger()

// 创建一个中间件集合
const middleware = [thunk] //比如，logger就一定要放在最后，否则输出结果会不正确。
const rootReducer = combineReducers({
  index
});
const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
  );
  return store;
}

export default configureStore
