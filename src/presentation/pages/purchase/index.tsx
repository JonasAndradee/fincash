import { FC } from 'react'

import { Purchase } from '../../../entities/purchase'
import PurchaseFormSection from '../../components/organisms/PurchaseFormSection'
import MainTemplate from '../../components/template/MainTemplate'

interface IProps{
  onCreatePurchase: (purchase: Purchase) => void
}

const PurchasePage: FC<IProps> = ({ onCreatePurchase }) => {
  return (
    <MainTemplate noButton title="Criar Compras" page="/compras/cadastrar">
      <PurchaseFormSection onCreatePurchase={onCreatePurchase} />
    </MainTemplate>
  )
}

export default PurchasePage
