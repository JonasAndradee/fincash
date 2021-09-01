import { Dispatch } from 'redux'
import { User } from '../../../entities'
import { ActionType } from '../action-types'
import { Action } from '../actions'

export const userUpdate = (user: User) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.UPDATE,
      payload: user
    })
  }
}
