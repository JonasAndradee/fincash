import { FC } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import Style from './Header.style'

interface IProps{
  title?: string
}

const Header: FC<IProps> = ({ title }) => {
  return (
    <Style.Container>
      <Style.Title>{title}</Style.Title>
      <Style.Button>
        <Style.Link href="/compras/cadastrar">
        <AiOutlinePlus size={19} />
        <Style.Label>
          Cadastrar compras
        </Style.Label>
        </Style.Link>
      </Style.Button>
    </Style.Container>)
}

export default Header
