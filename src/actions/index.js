import axios from 'axios';
const fetchUrl = (url, config = {}, type = 'GetSuccess') => async (dispatch, getState) => {
  dispatch({
    type: 'ShowLoading'
  })
  try {
    let res = await axios(url, config)
    dispatch({
      type: type,
      data: res.data,
    });
    dispatch({
      type: 'HideLoading'
    })
    return res.data
  } catch (err) {
    //console.log(err.message)
    dispatch({
      type: 'HideLoading'
    })
    return err.message
  }
}

const hideLoading = () => (dispatch, getState) => {
  dispatch({
    type: 'HideLoading'
  });
}

export {
  fetchUrl,
  hideLoading
}
