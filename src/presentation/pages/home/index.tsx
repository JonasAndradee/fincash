import { FC } from 'react'
import PurchaseList from '../../components/organisms/PurchaseList'
import MainTemplate from '../../components/template/MainTemplate'

const purchaseList = [
  {
    id: 1,
    amount: 23.9,
    date: '24/03/2000',
    percentageCashback: 293.8,
    valueCashback: 3892.6,
    status: 'Aprovado'
  },
  {
    id: 1,
    amount: 23.9,
    date: '24/03/2000',
    percentageCashback: 293.8,
    valueCashback: 3892.6,
    status: 'Aprovado'
  },
  {
    id: 1,
    amount: 23.9,
    date: '24/03/2000',
    percentageCashback: 293.8,
    valueCashback: 3892.6,
    status: 'Aprovado'
  }
]

const Home: FC = () => {
  return (
    <MainTemplate title="Compras" page="/">
      <PurchaseList list={purchaseList}/>
    </MainTemplate>
  )
}

export default Home
