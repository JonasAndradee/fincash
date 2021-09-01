import styled from 'styled-components'
import theme from '../../../theme'

const Container = styled.div`
  width: 90%;
  margin: ${theme.space('base')} auto;

  overflow: auto;
  margin-bottom: 13vh;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${theme.color('white')};

  padding: ${theme.space('base')};
  border-radius: 14px;
  border: 1px solid ${theme.color('silver')};
  box-sizing: border-box;

  ${theme.breakpoints.down('md')}{
    display: none;
  }
`

const HeaderItem = styled.div`
  ${theme.typography.normal}
  font-weight: bold;
  width: 16%;
`

const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${theme.color('white')};

  padding: ${theme.space('base')};
  margin-top: ${theme.space('small')};

  border-radius: 14px;
  border: 1px solid ${theme.color('silver')};
  box-sizing: border-box;

  ${theme.breakpoints.down('md')}{
    display: none;
  }

  &:hover{
    background: ${theme.color('silver')};
    cursor: pointer;
  }
`

const ListItem = styled.div`
  ${theme.typography.normal}
  width: 16%;
`

const ListItemMobile = styled.div`
  ${theme.typography.normal}
  width: 70px;
`

const ContainerItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderItemMobile = styled.p`
  ${theme.typography.normal}
  font-weight: bold;
  margin: 0;
  margin-right: ${theme.space('micro')};
`

const ListMobile = styled.div`
  ${theme.breakpoints.up('md')}{
    display: none;
  }

  margin-top: ${theme.space('small')};
  background: ${theme.color('white')};

  padding: ${theme.space('base')};
  border-radius: 14px;
  border: 1px solid ${theme.color('silver')};
  box-sizing: border-box;
`

const Loading = styled.div`
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(359deg);
    }
  }

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 290px;

  font-weight: normal;
  font-size: 14px;
  color: #64748b;

  svg {
    color: #64748b;
    width: 26px;
    height: 26px;
    animation: rotate 2s ease infinite;
    margin-bottom: 16px;
  }
`

export default {
  Container,
  Header,
  HeaderItem,
  ListItem,
  List,
  ListItemMobile,
  HeaderItemMobile,
  ListMobile,
  ContainerItems,
  Loading
}
