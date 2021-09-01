import { memo, FC, useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BiLockAlt } from 'react-icons/bi'
import { HiOutlineIdentification, HiOutlineUserCircle } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { State, actionCreators } from '../../../../adapters/redux'
import { User, Credential } from '../../../../entities'

import TextField from '../../atoms/TextField'

import Style from './SignInForm.style'

interface ISignUpForm{
  onSubmit: (user: User, credencial: Credential) => void
  linkSignIn?: string
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

  const dispacth = useDispatch()
  const userState = useSelector((state: State) => state.user)
  const { userUpdate } = bindActionCreators(actionCreators, dispacth)

  const handleValue = (key: string, value: string) => {
    setValues({ ...values, [key]: value })
  }

  const { onSubmit, linkSignIn } = props

  const handleClick = () => {
    const { name, cpf, email, password } = values
    setError('')
    try {
      const user = new User(name, cpf, email)

      // Não tem necessidade deste dispacth.
      // Só coloquei ele para mostrar meus conhecimentos em como utilizar o redux
      userUpdate(user)

      const credential = new Credential(email, password)
      onSubmit(userState, credential)
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
      {linkSignIn && (
        <Style.SigInLink href={linkSignIn} >Login</Style.SigInLink>
      )}
      <Style.DividerLine />
      <Style.Button onClick={handleClick}>Cadastrar</Style.Button>
    </Style.Container>
  )
}

export default memo(SignUpForm)
