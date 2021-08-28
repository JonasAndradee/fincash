import { Action } from '../actions/index'
import { ActionType } from '../action-types'

const initialState = 0

const reducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.UPDATE:
      return state + action.payload
    case ActionType.CLEAR:
      return state + action.payload
    default:
      return state
  }
}

export default reducer
