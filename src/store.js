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
const logger = createLogger()

// const createThunkMiddleware = (extraArgument) => ({
//   dispatch,
//   getState
// }) => next => action => {
//   console.log('action', action)
//   if (typeof action === 'function') {
//     console.log('act 2 , invo')
//     return action(dispatch, getState, extraArgument);
//   }
//   console.log('act next , invo')
//   return next(action);
// };
// const thunk = new createThunkMiddleware()
//
// const createLogger = () => ({
//   dispatch,
//   getState
// }) => next => action => {
//   console.log('log dispatch:', action);
//   next(action);
//   console.log('log finish:', action);
// }
// const logger = createLogger()
//
// const createTest = () => ({
//   dispatch,
//   getState
// }) => next => action => {
//   console.log('test1');
//   next(action);
//   console.log('test2:');
// }
// const testMiddleware = createTest()

const middlewares = [thunk, logger] //比如，logger就一定要放在最后，否则输出结果会不正确。

const configureStore = () => {
  const store = createStore(
    index,
    applyMiddleware(...middlewares)
  );
  return store;
}

export default configureStore
