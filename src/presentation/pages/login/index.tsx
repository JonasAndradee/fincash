import { FC } from 'react'
import { Credential } from '../../../entities'
import SignInFormSection from '../../components/organisms/SignInFormSection'

interface IProps{
  onSignIn: (credencial: Credential) => void
}

const Login: FC<IProps> = ({ onSignIn }) => {
  return (
    <SignInFormSection onSignIn={onSignIn}/>
  )
}

export default Login
