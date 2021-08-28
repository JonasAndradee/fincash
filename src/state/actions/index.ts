import { ActionType } from '../action-types'

interface UpdateAction{
  type: ActionType.UPDATE
  payload: number
}

interface ClearAction{
  type: ActionType.CLEAR
  payload: number
}

export type Action = UpdateAction | ClearAction
