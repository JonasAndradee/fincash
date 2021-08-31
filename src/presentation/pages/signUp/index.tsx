import { FC } from 'react'
import { User, Credential } from '../../../entities'
import SignUpFormSection from '../../components/organisms/SignUpFormSection'

interface IProps{
  onSignup: (user: User, credencial: Credential) => void
}

const SignUp: FC<IProps> = ({ onSignup }) => {
  return (
    <SignUpFormSection onSignup={onSignup}/>
  )
}

export default SignUp
