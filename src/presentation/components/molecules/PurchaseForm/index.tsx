import { memo, FC } from 'react'
import { BsCalendar } from 'react-icons/bs'
import { MdAttachMoney } from 'react-icons/md'
import { AiOutlineNumber } from 'react-icons/ai'

import TextField from '../../atoms/TextField'

import Style from './PurchaseForm.style'

interface ISignUpForm{
  onSubmit: () => void
  linkForgotPassword?: string
}

const PurchaseForm: FC<ISignUpForm> = (props) => {
  const { onSubmit } = props

  return (
    <Style.Container>
      <Style.WrapperField>
        <TextField icon={<AiOutlineNumber size={19}/>} label="Código" id="email"/>
      </Style.WrapperField>
      <Style.WrapperField>
        <TextField icon={<MdAttachMoney size={19}/>} label="Valor" id="cpf"/>
      </Style.WrapperField>
      <Style.WrapperField>
        <TextField icon={<BsCalendar size={19}/>} label="Data" type="date" id="email"/>
      </Style.WrapperField>
      <Style.DividerLine />
      <Style.Button onClick={onSubmit}>Cadastrar</Style.Button>
    </Style.Container>
  )
}

export default memo(PurchaseForm)
