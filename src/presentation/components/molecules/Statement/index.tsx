import { FC } from 'react'

import Style from './Statement.style'

type StatementItem = {
  id: number,
  date: string
  value: string
}

interface IProps{
  statements: StatementItem[]
}

const Statement: FC<IProps> = ({ statements }) => {
  return (
   <Style.Container>
     {statements.map((statement) => (
      <Style.StatementItem key={statement.id}>
       <Style.StatementItemDate>
         {statement.date}
       </Style.StatementItemDate>
       <Style.StatementItemDate>
        {statement.value}
       </Style.StatementItemDate>
     </Style.StatementItem>
     ))}
   </Style.Container>
  )
}

export default Statement
