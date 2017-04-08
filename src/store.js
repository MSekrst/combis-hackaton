// @flow

import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import { REHYDRATE } from 'redux-persist/constants'
import createActionBuffer from 'redux-action-buffer'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const isBrowser = typeof window !== 'undefined'
const isDev = process.env.NODE_ENV !== 'production'

const middlewares = [thunk]

if (isBrowser && isDev) {
  middlewares.push(
    createLogger({ duration: true }),
    createActionBuffer(REHYDRATE),
  )
}

const store = createStore(rootReducer,
  compose(
    applyMiddleware(...middlewares),
    (isBrowser && window.devToolsExtension) ?
      window.devToolsExtension() :
      f => f,
  ),
  autoRehydrate(),
)
if (isBrowser) persistStore(store)

export { store }
