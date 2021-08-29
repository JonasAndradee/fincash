import { memo, FC } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BiLockAlt } from 'react-icons/bi'
import { HiOutlineIdentification, HiOutlineUserCircle } from 'react-icons/hi'

import TextField from '../../atoms/TextField'

import Style from './SignInForm.style'

interface ISignUpForm{
  onSubmit: () => void
  linkForgotPassword?: string
}

const SignUpForm: FC<ISignUpForm> = (props) => {
  const { onSubmit } = props

  return (
    <Style.Container>
      <Style.WrapperField>
        <TextField icon={<HiOutlineUserCircle size={19}/>} label="Nome completo" id="email"/>
      </Style.WrapperField>
      <Style.WrapperField>
        <TextField icon={<HiOutlineIdentification size={19}/>} label="CPF" id="cpf"/>
      </Style.WrapperField>
      <Style.WrapperField>
        <TextField icon={<AiOutlineMail size={19}/>} label="E-mail" id="email"/>
      </Style.WrapperField>
      <Style.WrapperField>
        <TextField icon={<BiLockAlt size={19}/>} type="password" label="Senha" id="password"/>
      </Style.WrapperField>
      <Style.WrapperField>
        <TextField icon={<BiLockAlt size={19}/>} type="password" label="Confirmar senha" id="confirm-password"/>
      </Style.WrapperField>
      <Style.DividerLine />
      <Style.Button onClick={onSubmit}>Entrar</Style.Button>
    </Style.Container>
  )
}

export default memo(SignUpForm)
