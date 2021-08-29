import { memo } from 'react'
import { SiCashapp } from 'react-icons/si'

import SignInForm from '../../molecules/SignInForm'

import Style from './SignInFormSection.style'

const SignInFormSection = () => {
  const onSubmit = () => {}

  return (
    <Style.Container>
      <Style.WrapperForm>
        <Style.Name><SiCashapp size={40}/>Fincash</Style.Name>
        <Style.Title>Faça seu login na plataforma</Style.Title>
        <SignInForm linkForgotPassword="/recuperar-senha" onSubmit={onSubmit}/>
      </Style.WrapperForm>
    </Style.Container>
  )
}

export default memo(SignInFormSection)
