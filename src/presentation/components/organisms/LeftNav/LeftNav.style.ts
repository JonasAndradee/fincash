import styled, { css } from 'styled-components'
import theme from '../../../theme'

const Container = styled.div`
  background: ${theme.color('violet')};

  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Content = styled.div`
  padding: ${theme.space('small')};
`

const Menu = styled.div`
  margin-top: ${theme.space('giga')};
`

interface IMenuItem {
  active: boolean
}

const MenuItem = styled.a<IMenuItem>`
  margin-top: ${theme.space('small')};
  padding: ${theme.space('micro')};
  
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;

  &:hover{
    background: ${theme.color('purple')};
  }

  ${({ active }) => active && css`
    background: ${theme.color('purple')};
  `}

  svg{
    color: ${theme.color('white')};
    width: 30px;
    height: 30px;
  }
`

const Title = styled.p`
  ${theme.typography.h2}
`

const UserContent = styled.div`
  margin-bottom: ${theme.space('small')};
  cursor: pointer;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  svg{
    width: 45px;
    height: 45px;
    color: ${theme.color('white')};
    margin-bottom: ${theme.space('base')};
  }
`

export default {
  Container,
  Title,
  Content,
  Menu,
  MenuItem,
  UserContent
}
