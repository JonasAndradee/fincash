import { memo, FC, useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BiLockAlt } from 'react-icons/bi'

import { Credential } from '../../../../entities'
import TextField from '../../atoms/TextField'

import Style from './SignInForm.style'

type Values = {
  email: string | '',
  password: string | ''
}

interface ISignInForm{
  onSubmit: (credencial: Credential) => void
  linkForgotPassword?: string
}

const SignInForm: FC<ISignInForm> = (props) => {
  const { onSubmit, linkForgotPassword } = props

  const [values, setValues] = useState<Values>({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  const handleValue = (key: string, value: string) => {
    setValues({ ...values, [key]: value })
  }

  const handleClick = () => {
    const { email, password } = values
    setError('')
    try {
      const credential = new Credential(email, password)
      onSubmit(credential)
    } catch (e: any) {
      setError(e?.message)
    }
  }

  return (
    <Style.Container>
      {error && (
        <Style.Error>{error}</Style.Error>
      )}
       <Style.WrapperField>
        <TextField
          icon={<AiOutlineMail size={19}/>}
          label="E-mail"
          onChange={(event) => handleValue('email', event.currentTarget.value)}
          id="email"
        />
      </Style.WrapperField>
      <Style.WrapperField>
        <TextField
          icon={<BiLockAlt size={19}/>}
          onChange={(event) => handleValue('password', event.currentTarget.value)}
          type="password"
          label="Senha"
          id="password"
        />
      </Style.WrapperField>
      {linkForgotPassword && (
        <Style.ForgotPassword href={linkForgotPassword} >Esqueci minha senha</Style.ForgotPassword>
      )}
      <Style.DividerLine />
      <Style.Button onClick={handleClick}>Entrar</Style.Button>
    </Style.Container>
  )
}

export default memo(SignInForm)
