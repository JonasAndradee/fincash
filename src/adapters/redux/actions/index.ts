import { User } from '../../../entities'
import { ActionType } from '../action-types'

interface UpdateAction{
  type: ActionType.UPDATE
  payload: User
}

export type Action = UpdateAction
