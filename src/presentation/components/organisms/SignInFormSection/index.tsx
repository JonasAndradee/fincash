import { FC, memo } from 'react'
import { SiCashapp } from 'react-icons/si'

import { Credential } from '../../../../entities'
import SignInForm from '../../molecules/SignInForm'

import Style from './SignInFormSection.style'

interface IProps{
  onSignIn: (credencial: Credential) => void
}

const SignInFormSection: FC<IProps> = ({ onSignIn }) => {
  return (
    <Style.Container>
      <Style.WrapperForm>
        <Style.Name><SiCashapp size={40}/>Fincash</Style.Name>
        <Style.Title>Faça seu login na plataforma</Style.Title>
        <SignInForm linkRegister="/cadastro" onSubmit={onSignIn}/>
      </Style.WrapperForm>
    </Style.Container>
  )
}

export default memo(SignInFormSection)
