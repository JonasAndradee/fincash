import { FC } from 'react'

import Statement from '../../molecules/Statement'
import Style from './StatementSection.style'

type StatementItem = {
  id: number,
  date: string
  value: string
}

interface IProps{
  amount: string
  statements: StatementItem[]
}

const StatementSection: FC<IProps> = ({ statements, amount }) => {
  return (
    <Style.Container>
      <Style.AmountInfo>
        <Style.BalanceText>
          Saldo:
        <Style.AmountText>
         {amount}
        </Style.AmountText>
        </Style.BalanceText>
        <Style.Button>
          Resgatar
        </Style.Button>
      </Style.AmountInfo>
      <Style.StatementContainer>
        <Statement statements={statements}/>
      </Style.StatementContainer>
    </Style.Container>
  )
}

export default StatementSection
