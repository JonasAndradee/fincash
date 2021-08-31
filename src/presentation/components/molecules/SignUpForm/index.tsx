import { memo, FC, useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BiLockAlt } from 'react-icons/bi'
import { HiOutlineIdentification, HiOutlineUserCircle } from 'react-icons/hi'
import { User, Credential } from '../../../../entities'

import TextField from '../../atoms/TextField'

import Style from './SignInForm.style'

interface ISignUpForm{
  onSubmit: (user: User, credencial: Credential) => void
  linkForgotPassword?: string
}

type Values = {
  email: string | '',
  password: string | ''
  cpf: string | ''
  name: string | ''
}

const SignUpForm: FC<ISignUpForm> = (props) => {
  const [values, setValues] = useState<Values>({
    email: '',
    password: '',
    cpf: '',
    name: ''
  })
  const [error, setError] = useState('')

  const handleValue = (key: string, value: string) => {
    setValues({ ...values, [key]: value })
  }

  const { onSubmit } = props

  const handleClick = () => {
    const { name, cpf, email, password } = values
    setError('')
    try {
      const user = new User(name, cpf, email)
      const credential = new Credential(email, password)
      onSubmit(user, credential)
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
          icon={<HiOutlineUserCircle size={19}/>}
          onChange={(event) => handleValue('name', event.currentTarget.value)}
          label="Nome completo"
          id="name"
        />
      </Style.WrapperField>
      <Style.WrapperField>
        <TextField
          icon={<HiOutlineIdentification size={19}/>}
          onChange={(event) => handleValue('cpf', event.currentTarget.value)}
          label="CPF"
          id="cpf"
        />
      </Style.WrapperField>
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
      <Style.WrapperField>
        <TextField
          icon={<BiLockAlt size={19}/>}
          type="password"
          onChange={(event) => handleValue('confirm-password', event.currentTarget.value)}
          label="Confirmar senha"
          id="confirm-password"
         />
      </Style.WrapperField>
      <Style.DividerLine />
      <Style.Button onClick={handleClick}>Entrar</Style.Button>
    </Style.Container>
  )
}

export default memo(SignUpForm)
