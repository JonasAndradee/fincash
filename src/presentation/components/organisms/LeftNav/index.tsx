import { FC, memo, ReactNode } from 'react'
import { SiCashapp } from 'react-icons/si'
import { FaRegUserCircle } from 'react-icons/fa'

import Style from './LeftNav.style'
import theme from '../../../theme'

type MenuItems = {
  id: number
  icon: ReactNode
  href: string
}

interface IProps {
  page: string
  menuItems: MenuItems[]
}

const LeftNav: FC<IProps> = ({ page, menuItems }) => {
  return (
    <Style.Container>
      <Style.Content>
        <SiCashapp size={50} color={theme.color('purple', 'light')}/>
        <Style.Menu>
        {menuItems?.map((item) => (
          <Style.MenuItem href={item.href} active={item.href === page} key={item.id}>{item.icon}</Style.MenuItem>
        ))}
        </Style.Menu>
      </Style.Content>
      <Style.UserContent>
        <FaRegUserCircle />
      </Style.UserContent>
    </Style.Container>)
}

export default memo(LeftNav)
