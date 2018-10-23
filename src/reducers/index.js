import immutable from 'immutable';
// 初始化state数据
const initialState = immutable.fromJS({
  isloading: 0,
});
// 通过dispatch action进入
function reducer(state = initialState, action) {
  // 根据不同的action type进行state的更新
  switch (action.type) {
    case 'ShowLoading':
      {
        return state.set('isloading', 1)
      }
    case 'HideLoading':
      {
        return state.set('isloading', 0)
      }
    default:
      return state
  }
}
export default reducer;
