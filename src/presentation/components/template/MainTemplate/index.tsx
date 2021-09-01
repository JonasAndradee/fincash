import { FC, useEffect } from 'react'
import Cookies from 'universal-cookie'
import { AiFillHome } from 'react-icons/ai'
import { RiMoneyDollarBoxFill } from 'react-icons/ri'
import { BiPurchaseTag } from 'react-icons/bi'
import Header from '../../organisms/Header'
import LeftNav from '../../organisms/LeftNav'
import BottomNav from '../../organisms/BottomNav'

import Style from './MainTemplate.style'
import { useHistory } from 'react-router-dom'

const menuItems = [
  { id: 1, icon: <AiFillHome />, href: '/' },
  { id: 2, icon: <RiMoneyDollarBoxFill />, href: '/extrato' },
  { id: 2, icon: <BiPurchaseTag />, href: '/compras/cadastrar' }
]

interface IMainTemplate{
  page: string
  title?: string
  noButton?: boolean
}

const MainTemplate: FC<IMainTemplate> = ({ page, title, noButton, children }) => {
  const history = useHistory()

  useEffect(() => {
    const cookies = new Cookies()

    const accessToken = cookies.get('accessToken')

    if (!accessToken) {
      history.push('/login')
    }
  }, [])

  return (
    <Style.Container>
      <Style.Nav>
        <Style.ContentLeft>
          <LeftNav menuItems={menuItems} page={page}/>
        </Style.ContentLeft>
        <Style.ContentRight>
          <Header noButton={noButton} title={title} />
          <Style.ContentDesktop>
            {children}
         </Style.ContentDesktop>
        </Style.ContentRight>
        <Style.ContentMobile>
        {children}
        </Style.ContentMobile>
        <Style.ContentBottom>
          <BottomNav menuItems={menuItems} page={page} />
        </Style.ContentBottom>
      </Style.Nav>
    </Style.Container>
  )
}

export default MainTemplate
