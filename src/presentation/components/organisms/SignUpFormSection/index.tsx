import { FC, memo } from 'react'
import { SiCashapp } from 'react-icons/si'
import { User, Credential } from '../../../../entities'

import SignUpForm from '../../molecules/SignUpForm'

import Style from './SignUpFormSection.style'

interface IProps{
  onSignup: (user: User, credencial: Credential) => void
}

const SignUpFormSection: FC<IProps> = ({ onSignup }) => {
  return (
    <Style.Container>
      <Style.WrapperForm>
        <Style.Name><SiCashapp size={40}/>Fincash</Style.Name>
        <Style.Title>Faça seu cadastro na plataforma</Style.Title>
        <SignUpForm linkForgotPassword="/recuperar-senha" onSubmit={onSignup}/>
      </Style.WrapperForm>
    </Style.Container>
  )
}

export default memo(SignUpFormSection)
