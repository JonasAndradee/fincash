import styled, { css } from 'styled-components'
import theme from '../../../theme'

const Container = styled.div`
  background: ${theme.color('violet')};

  height: 100%;

  padding: ${theme.space('micro')};
`

const Content = styled.div``

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 ${theme.space('small')};
`

interface IMenuItem {
  active: boolean
}

const MenuItem = styled.a<IMenuItem>`
  padding: ${theme.space('micro')};
  
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;

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

export default {
  Container,
  Title,
  Content,
  Menu,
  MenuItem
}
