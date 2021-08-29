import React, { memo, ReactNode } from 'react'

import { MdErrorOutline, MdWarning } from 'react-icons/md'
import { CgAsterisk } from 'react-icons/cg'

import Style from './TextField.style'
import theme from '../../../theme'

interface IProps {
  id?: string,
  label?: string,
  placeholder?: string,
  value?: string,
  icon?: ReactNode,
  required?: boolean,
  selected?: boolean,
  disabled?: boolean,
  error?: ReactNode | string,
  alert?: ReactNode,
  type?: string
}

const TextField: React.FC<IProps> = props => {
  const {
    id, required, selected, disabled,
    icon, label, value, placeholder,
    error, alert, ...other
  } = props

  return (
    <Style.Container id={id}>
      {
        label && (
          <Style.LabelContent>
            <Style.Label>{label}</Style.Label>
            {required && (<CgAsterisk color={theme.color('red')}size={16} />)}
          </Style.LabelContent>
        )
      }
      <Style.InputContent selected={selected} error={error} disabled={disabled}>
        {icon}
        <Style.Input value={value} placeholder={placeholder} disabled={disabled} {...other} />
      </Style.InputContent>
      {
        error && (
          <Style.MessageContent>
            <MdErrorOutline size={16} color={theme.color('error')} />
            <Style.MessageLabel>{error}</Style.MessageLabel>
          </Style.MessageContent>
        )
      }
      {
        alert && (
          <Style.MessageContent>
            <MdWarning size={19} color={theme.color('warning')} />
            <Style.MessageLabel>{alert}</Style.MessageLabel>
          </Style.MessageContent>
        )
      }
    </Style.Container>
  )
}

export default memo(TextField)
