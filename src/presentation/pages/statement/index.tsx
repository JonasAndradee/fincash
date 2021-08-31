import { FC } from 'react'
import MyAccountSection from '../../components/organisms/StatementSection'
import MainTemplate from '../../components/template/MainTemplate'

type StatementItem = {
  id: number,
  date: string
  value: string
}

interface IProps{
  amount: string
  statements: StatementItem[]
}

const Statement: FC<IProps> = ({ statements, amount }) => {
  return (
    <MainTemplate title="Extrato" page="/extrato">
      <MyAccountSection amount={amount} statements={statements}/>
    </MainTemplate>
  )
}

export default Statement
