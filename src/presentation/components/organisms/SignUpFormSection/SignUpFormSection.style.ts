import styled from 'styled-components'
import theme from '../../../theme'

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: #4c1d95 url("/login/background-login.svg") no-repeat center center fixed;
  background-size: cover;

  display: flex;

  ${theme.breakpoints.down('sm')}{
    height: auto;
  }
`

const Name = styled.p`
  ${theme.typography.display}
  color: ${theme.color('white')};
  font-weight: bold;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  svg{
    margin-right: ${theme.space('small')};
  }
`

const Title = styled.p`
  ${theme.typography.h2}
  color: ${theme.color('white')};

  text-align: center;
  margin: ${theme.space('large')} 0;

  ${theme.breakpoints.down('sm')}{
    margin: ${theme.space('small')} 0;
  }
`

const WrapperForm = styled.div`
  width: 500px;
  
  margin: 0 auto;

  ${theme.breakpoints.down('sm')}{
    width: 90%;
    margin-bottom: ${theme.space('base')};
  }
`

export default {
  Container,
  WrapperForm,
  Title,
  Name
}
