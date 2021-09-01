import { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { Purchase } from '../../../entities/purchase'

import PurchasePage from '../../../presentation/pages/purchase'

import { LocalService } from '../../../services/LocalService'

export const makePurchase: FC = () => {
  const service = new LocalService()
  const history = useHistory()

  const onCreatePurchase = async (purchase: Purchase) => {
    try {
      const response = await service.createPurchase(purchase)
      if (response.statusCode === 200) {
        history.push('/')
      }
    } catch (e: any) {
      console.log(e)
    }
  }

  return (
   <PurchasePage onCreatePurchase={onCreatePurchase}/>
  )
}
