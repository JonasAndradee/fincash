import { FC } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import Style from './Header.style'

interface IProps{
  title?: string
  noButton?: boolean
}

const Header: FC<IProps> = ({ title, noButton }) => {
  return (
    <Style.Container>
      <Style.Title>{title}</Style.Title>
      {!noButton && (
        <Style.Button>
          <Style.Link href="/compras/cadastrar">
          <AiOutlinePlus size={19} />
          <Style.Label>
            Cadastrar compras
          </Style.Label>
          </Style.Link>
        </Style.Button>
      )}
    </Style.Container>
  )
}

export default Header
