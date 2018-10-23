import 'whatwg-fetch' // 可以引入fetch来进行Ajax


export const fetchUrl = (url, params = {}, type = 'GetSuccess') => async(dispatch, getState) => {
  dispatch({ type: 'ShowLoading' })
  try {
    let res = await fetch(url, params)
    let json = await res.json()
    dispatch({
      type: type,
      data: josn.data,
    });
    dispatch({ type: 'HideLoading' })
    return json
  } catch (err) {
    alert('网络错误')
    dispatch({ type: 'HideLoading' })
  }

}
