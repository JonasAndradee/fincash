import { memo } from 'react'
import { SiCashapp } from 'react-icons/si'

import SignUpForm from '../../molecules/SignUpForm'

import Style from './SignUpFormSection.style'

const SignUpFormSection = () => {
  const onSubmit = () => {}

  return (
    <Style.Container>
      <Style.WrapperForm>
        <Style.Name><SiCashapp size={40}/>Fincash</Style.Name>
        <Style.Title>Faça seu cadastro na plataforma</Style.Title>
        <SignUpForm linkForgotPassword="/recuperar-senha" onSubmit={onSubmit}/>
      </Style.WrapperForm>
    </Style.Container>
  )
}

export default memo(SignUpFormSection)
