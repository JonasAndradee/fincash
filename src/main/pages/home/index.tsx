import { FC, useState, useEffect } from 'react'

import { LocalService } from '../../../services/LocalService'
import Home from '../../../presentation/pages/home'

export const makeHome: FC = () => {
  const service = new LocalService()
  const [purchases, setPurchase] = useState([])

  const listPurchase = async () => {
    try {
      const response = await service.listPurchase()
      if (response?.statusCode === 200) {
        setPurchase(response?.body)
      }
      return response
    } catch (e: any) {
      console.log(e)
      return {}
    }
  }

  useEffect(() => {
    listPurchase()
  }, [])

  return (
    <Home purchases={purchases}/>
  )
}
