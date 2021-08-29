import styled from 'styled-components'
import theme from '../../../theme'

const Container = styled.div`
`

const Nav = styled.div`
  display: flex;
  ${theme.breakpoints.down('md')}{
    flex-direction: column;
  }
`

const ContentDesktop = styled.div`
  ${theme.breakpoints.down('md')}{
    display: none;
  }
`

const ContentMobile = styled.div`
  ${theme.breakpoints.up('md')}{
    display: none;
  }
`

const ContentLeft = styled.div`
  width: 90px;
  height: 100vh;

  ${theme.breakpoints.down('md')}{
    display: none;
  }
`

const ContentBottom = styled.div`
  ${theme.breakpoints.up('md')}{
    display: none;
  }

  position: fixed;
  width: 100%;
  bottom: 0;
`

const ContentRight = styled.div`
  width: 100%;
  height: 64px;
`

export default {
  Container,
  Nav,
  ContentLeft,
  ContentRight,
  ContentBottom,
  ContentDesktop,
  ContentMobile
}
