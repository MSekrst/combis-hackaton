import fetch from 'isomorphic-fetch'

export const GET_ITEMS = 'GET_ITEMS'
export const SET_UNPENDING = 'SET_UNPENDINGS'
export const ERROR_GETTING_LIST = 'ERROR_GETTING_LIST'

export function getItems() {
  return (dispatch) => {
    fetch('http://localhost:8080/all')
      .then(res => res.json())
      .then((data) => {
        dispatch({
          type: GET_ITEMS,
          payload: data,
        })
      }).catch(() => dispatch({
        type: ERROR_GETTING_LIST,
      }))
  }
}

export function removePending(_id) {
  return (dispatch) => {
    fetch('http://localhost:8080/status', {
      method: 'POST',
      body: JSON.stringify({ _id, status: 'Finished' }),
    })
    dispatch(getItems())
  }
}

