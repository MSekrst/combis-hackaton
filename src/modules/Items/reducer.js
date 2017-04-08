import { GET_ITEMS } from './actions'
const initialState = []

export default function Items(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return [...action.payload]
    default:
      return state
  }
}
