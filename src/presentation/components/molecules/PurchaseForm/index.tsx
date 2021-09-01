import { memo, FC, useState } from 'react'
import { BsCalendar } from 'react-icons/bs'
import { MdAttachMoney } from 'react-icons/md'
import { AiOutlineNumber } from 'react-icons/ai'

import TextField from '../../atoms/TextField'

import Style from './PurchaseForm.style'
import { Purchase } from '../../../../entities/purchase'

type Values = {
  code: string | '',
  value: string | ''
  date: string | ''
}

interface ISignUpForm{
  onSubmit: (purchase: Purchase) => void
  linkForgotPassword?: string
}

const PurchaseForm: FC<ISignUpForm> = (props) => {
  const [values, setValues] = useState<Values>({
    code: '',
    value: '',
    date: ''
  })
  const [error, setError] = useState('')

  const handleValue = (key: string, value: string) => {
    setValues({ ...values, [key]: value })
  }

  const { onSubmit } = props

  const handleClick = () => {
    const { code, value, date } = values
    setError('')
    try {
      const purchase = new Purchase(code, value, date)
      onSubmit(purchase)
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
          icon={<AiOutlineNumber size={19}/>}
          onChange={(event) => handleValue('code', event.currentTarget.value)}
          label="Código" id="code"
        />
      </Style.WrapperField>
      <Style.WrapperField>
        <TextField
          onChange={(event) => handleValue('value', event.currentTarget.value)}
          icon={<MdAttachMoney size={19}/>}
          label="Valor" id="value"
        />
      </Style.WrapperField>
      <Style.WrapperField>
        <TextField
          icon={<BsCalendar size={19}/>}
          onChange={(event) => handleValue('date', event.currentTarget.value)}
          label="Data" type="date" id="date"
        />
      </Style.WrapperField>
      <Style.DividerLine />
      <Style.Button onClick={handleClick}>Cadastrar</Style.Button>
    </Style.Container>
  )
}

export default memo(PurchaseForm)
