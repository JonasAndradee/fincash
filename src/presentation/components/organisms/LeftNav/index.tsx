import { FC, memo, ReactNode } from 'react'
import { SiCashapp } from 'react-icons/si'
import { FaRegUserCircle } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import Cookies from 'universal-cookie'
import Style from './LeftNav.style'
import theme from '../../../theme'
import { useHistory } from 'react-router-dom'

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
  const history = useHistory()

  const logout = () => {
    const cookies = new Cookies()
    cookies.remove('accessToken')
    history.push('/login')
  }

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
        <FiLogOut onClick={logout}/>
      </Style.UserContent>
    </Style.Container>)
}

export default memo(LeftNav)
