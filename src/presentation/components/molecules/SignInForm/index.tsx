import { memo, FC } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BiLockAlt } from 'react-icons/bi'

import TextField from '../../atoms/TextField'

import Style from './SignInForm.style'

interface ISignInForm{
  onSubmit: () => void
  linkForgotPassword?: string
}

const SignInForm: FC<ISignInForm> = (props) => {
  const { onSubmit, linkForgotPassword } = props

  return (
    <Style.Container>
      <Style.WrapperField>
        <TextField icon={<AiOutlineMail size={19}/>} label="E-mail" id="email"/>
      </Style.WrapperField>
      <Style.WrapperField>
        <TextField icon={<BiLockAlt size={19}/>} type="password" label="Senha" id="password"/>
      </Style.WrapperField>
      {linkForgotPassword && (
        <Style.ForgotPassword href={linkForgotPassword} >Esqueci minha senha</Style.ForgotPassword>
      )}
      <Style.DividerLine />
      <Style.Button onClick={onSubmit}>Entrar</Style.Button>
    </Style.Container>
  )
}

export default memo(SignInForm)
