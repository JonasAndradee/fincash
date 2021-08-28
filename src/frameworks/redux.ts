import { applyMiddleware, createStore } from 'redux'
import reducers from '../adapters/redux/reducers'
import thunk from 'redux-thunk'

export const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk)
)
