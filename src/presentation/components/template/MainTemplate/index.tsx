import { FC } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { RiMoneyDollarBoxFill } from 'react-icons/ri'
import { BiPurchaseTag } from 'react-icons/bi'
import Header from '../../organisms/Header'
import LeftNav from '../../organisms/LeftNav'
import BottomNav from '../../organisms/BottomNav'

import Style from './MainTemplate.style'

const menuItems = [
  { id: 1, icon: <AiFillHome />, href: '/' },
  { id: 2, icon: <RiMoneyDollarBoxFill />, href: '/minha-conta' },
  { id: 2, icon: <BiPurchaseTag />, href: '/compras/cadastrar' }
]

interface IMainTemplate{
  page: string
}

const MainTemplate: FC<IMainTemplate> = ({ page, children }) => {
  return (
    <Style.Container>
      <Style.Nav>
        <Style.ContentLeft>
          <LeftNav menuItems={menuItems} page={page}/>
        </Style.ContentLeft>
        <Style.ContentRight>
          <Header />
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
