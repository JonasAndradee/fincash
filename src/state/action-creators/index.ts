import { Dispatch } from 'redux'
import { ActionType } from '../action-types'
import { Action } from '../actions'

export const testUpdate = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.UPDATE,
      payload: amount
    })
  }
}

export const testClear = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CLEAR,
      payload: amount
    })
  }
}
