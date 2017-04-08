// @flow

import { combineReducers } from 'redux'
import heroes from './modules/Heroes/reducer'
import items from './modules/Items/reducer'

export default combineReducers({ heroes, items })
