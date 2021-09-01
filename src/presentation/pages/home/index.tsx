import { FC } from 'react'
import PurchaseList from '../../components/organisms/PurchaseList'
import MainTemplate from '../../components/template/MainTemplate'

type Purchase = {
  id: number,
  amount: string,
  date: string,
  percentageCashback: string,
  valueCashback: string,
  status: string
}

interface IProps{
  purchases: Purchase[] | []
}

const Home: FC<IProps> = ({ purchases }) => {
  return (
    <MainTemplate title="Compras" page="/">
      <PurchaseList list={purchases}/>
    </MainTemplate>
  )
}

export default Home
