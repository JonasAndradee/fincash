import { Action } from '../actions/index'
import { ActionType } from '../action-types'
import { User } from '../../../entities'

const initialState = new User('test', '000', 'test@gmail.com')

const reducer = (state: User = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.UPDATE:
      return action.payload
    default:
      return state
  }
}

export default reducer
