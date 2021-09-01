import { FC, memo } from 'react'
import { SiCashapp } from 'react-icons/si'
import { Purchase } from '../../../../entities/purchase'

import PurchaseForm from '../../molecules/PurchaseForm'

import Style from './Purchase.style'

interface IProps{
  onCreatePurchase: (purchase: Purchase) => void
}

const PurchaseFormSection: FC<IProps> = ({ onCreatePurchase }) => {
  return (
    <Style.Container>
      <Style.WrapperForm>
        <Style.Name><SiCashapp size={40}/>Fincash</Style.Name>
        <Style.Title>Cadastre sua compra</Style.Title>
        <PurchaseForm linkForgotPassword="/recuperar-senha" onSubmit={onCreatePurchase}/>
      </Style.WrapperForm>
    </Style.Container>
  )
}

export default memo(PurchaseFormSection)
