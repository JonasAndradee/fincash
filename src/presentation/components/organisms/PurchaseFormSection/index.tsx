import { memo } from 'react'
import { SiCashapp } from 'react-icons/si'

import PurchaseForm from '../../molecules/PurchaseForm'

import Style from './Purchase.style'

const purchase = () => {
  const onSubmit = () => {}

  return (
    <Style.Container>
      <Style.WrapperForm>
        <Style.Name><SiCashapp size={40}/>Fincash</Style.Name>
        <Style.Title>Cadastre sua compra</Style.Title>
        <PurchaseForm linkForgotPassword="/recuperar-senha" onSubmit={onSubmit}/>
      </Style.WrapperForm>
    </Style.Container>
  )
}

export default memo(purchase)
