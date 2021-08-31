import { FC } from 'react'
import { useHistory } from 'react-router-dom'
import Cookies from 'universal-cookie'

import { LocalService } from '../../../services/LocalService'
import { User, Credential } from '../../../entities'
import SignUp from '../../../presentation/pages/signUp'

export const makeSignUp: FC = () => {
  const service = new LocalService()
  const history = useHistory()

  const onSignup = async (user: User, credential: Credential) => {
    try {
      const response = await service.signUpUser(user, credential)
      const cookies = new Cookies()
      cookies.set('accessToken', response?.body?.accessToken)
      history.push('/')
    } catch (e: any) {
      console.log(e)
    }
  }

  return (
   <SignUp onSignup={onSignup}/>
  )
}
