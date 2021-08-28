import { combineReducers } from 'redux'
import testReducer from './test'

const reducers = combineReducers({
  test: testReducer
})

export default reducers

export type State = ReturnType<typeof reducers>