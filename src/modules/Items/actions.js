export const GET_ITEMS = 'GET_ITEMS'

export function getItems() {
  return {
    type: GET_ITEMS,
    payload: [{ tag: 'Food', text: 'Rakovi', room: 202, status: 'Pending' }],
  }
}
