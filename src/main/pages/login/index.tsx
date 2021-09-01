import React from 'react'
import { useHistory } from 'react-router-dom'
import Cookies from 'universal-cookie'

import { LocalService } from '../../../services/LocalService'
import { Credential } from '../../../entities'
import Login from '../../../presentation/pages/login'

export const makeLogin: React.FC = () => {
  const service = new LocalService()
  const history = useHistory()

  const onSignIn = async (credential: Credential) => {
    try {
      const response = await service.signInUser(credential)
      const cookies = new Cookies()
      cookies.set('accessToken', response?.body?.accessToken, { secure: true, path: '/' })
      history.push('/')
    } catch (e: any) {
      console.log(e)
    }
  }

  return (
    <Login onSignIn={onSignIn}/>
  )
}
