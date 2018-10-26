import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  fetchUrl,
  hideLoading
} from 'actions/index'
const middleware = [thunk]
const httpMock = new MockAdapter(axios);
const mockStore = configureMockStore(middleware);
let store
describe('actions', () => {
  beforeEach(() => {
    store = mockStore({});
  })
  afterEach(() => {
    httpMock.restore()
  });
  test('axios success:', async () => {
    httpMock.onGet('/user').reply(200, 'mimi');
    let successActions = [{
        type: 'ShowLoading'
      },
      {
        type: 'GetSuccess',
        data: 'mimi'
      },
      {
        type: 'HideLoading'
      }
    ]
    let res = await store.dispatch(fetchUrl('/user'))
    //console.log(res)
    expect(store.getActions()).toEqual(successActions)
  })
  test('hideLoading:', () => {
    httpMock.onGet('/user').reply(200, 'mimi');
    let successActions = [{
      type: 'HideLoading'
    }]
    store.dispatch(hideLoading())
    expect(store.getActions()).toEqual(successActions)
  })
  test.only('axios faild:', async () => {
    httpMock.onGet('/faild').networkError();
    let errorActions = [{
        type: 'ShowLoading'
      },
      {
        type: 'HideLoading'
      }
    ]
    let err = await store.dispatch(fetchUrl('/faild'))
    //console.log(err)
    expect(store.getActions()).toEqual(errorActions)
  })

})


// "collectCoverageFrom": [
// "**/*.{js,jsx}",
// "!**/coverage/**",
// "!**/node_modules.js",
// "!**/dist/**",
// "!**/store.js",
// "!**/webpack.config.js"
// ],
