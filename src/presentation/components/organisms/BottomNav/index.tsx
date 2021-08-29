import { FC, memo, ReactNode } from 'react'

import Style from './BottomNav.style'

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
        <Style.Menu>
        {menuItems?.map((item) => (
          <Style.MenuItem href={item.href} active={item.href === page} key={item.id}>{item.icon}</Style.MenuItem>
        ))}
        </Style.Menu>
      </Style.Content>
    </Style.Container>)
}

export default memo(LeftNav)
