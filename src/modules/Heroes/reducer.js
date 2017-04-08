import { GET_HEROES } from './actions'
const initialState = []

export default function Heroes(state = initialState, action) {
  switch (action.type) {
    case GET_HEROES:
      return [...action.payload]
    default:
      return state
  }
}
