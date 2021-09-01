import { memo, FC } from 'react'
import { FaSpinner } from 'react-icons/fa'

import Style from './PurchaseList.style'

type List = {
  id: number
  amount: string
  date: string
  percentageCashback: string
  valueCashback: string
  status: string
}

interface IProps{
  list: List[] | []
}

const headerItems = ['Código', 'Valor', 'Data', ' % de cashback', 'Cashback', 'Status']

const PurchaseList: FC<IProps> = ({ list }) => {
  return (
    <Style.Container>
      <Style.Header>
        {headerItems?.map((label) => (
          <Style.HeaderItem key={label}>
           {label}
          </Style.HeaderItem>
        ))}
      </Style.Header>
      {!!list.length && list?.map((item) => (
        <Style.List key={item.id}>
           <Style.ListItem>
            {item.id}
          </Style.ListItem>
          <Style.ListItem>
            {item.amount}
          </Style.ListItem>
          <Style.ListItem>
            {item.date}
          </Style.ListItem>
          <Style.ListItem>
            {item.percentageCashback}
          </Style.ListItem>
          <Style.ListItem>
            {item.valueCashback}
          </Style.ListItem>
          <Style.ListItem>
            {item.status}
          </Style.ListItem>
        </Style.List>
      ))}
      {!list.length && <Style.Loading><FaSpinner size={25}/></Style.Loading>}
      {!!list.length && list?.map((item) => (
      <Style.ListMobile key={item.id}>
         <Style.ContainerItems>
            <Style.HeaderItemMobile>{headerItems[0]}:</Style.HeaderItemMobile>
            <Style.ListItemMobile>{item.id}</Style.ListItemMobile>
          </Style.ContainerItems>
          <Style.ContainerItems>
            <Style.HeaderItemMobile>{headerItems[1]}:</Style.HeaderItemMobile>
            <Style.ListItemMobile>{item.amount}</Style.ListItemMobile>
          </Style.ContainerItems>
          <Style.ContainerItems>
            <Style.HeaderItemMobile>{headerItems[2]}:</Style.HeaderItemMobile>
            <Style.ListItemMobile>{item.date}</Style.ListItemMobile>
          </Style.ContainerItems>
          <Style.ContainerItems>
            <Style.HeaderItemMobile>{headerItems[3]}:</Style.HeaderItemMobile>
            <Style.ListItemMobile>{item.percentageCashback}</Style.ListItemMobile>
          </Style.ContainerItems>
          <Style.ContainerItems>
            <Style.HeaderItemMobile>{headerItems[4]}:</Style.HeaderItemMobile>
            <Style.ListItemMobile>{item.valueCashback}</Style.ListItemMobile>
          </Style.ContainerItems>
          <Style.ContainerItems>
            <Style.HeaderItemMobile>{headerItems[5]}:</Style.HeaderItemMobile>
            <Style.ListItemMobile>{item.status}</Style.ListItemMobile>
          </Style.ContainerItems>
      </Style.ListMobile>
      ))}
    </Style.Container>
  )
}

export default memo(PurchaseList)
