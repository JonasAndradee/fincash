import styled from 'styled-components'
import theme from '../../../theme'

const Container = styled.div`
  background: ${theme.color('white')};
  width: 700px;
  height: 80vh;
  margin: ${theme.space('base')} auto;
  padding: ${theme.space('base')};
  border-radius: 14px;
  padding-bottom: ${theme.space('mega')};
  display: flex;

  ${theme.breakpoints.down('lg')}{
    width: 80%;
    height: 83vh;
    margin-bottom: ${theme.space('giga')};
  }
`

const Name = styled.p`
  ${theme.typography.display}
  color: ${theme.color('purple')};
  font-weight: bold;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  svg{
    margin-right: ${theme.space('small')};
    color: ${theme.color('purple')}
  }
`

const Title = styled.p`
  ${theme.typography.h2}
  color: ${theme.color('purple')};

  text-align: center;
  margin: ${theme.space('large')} 0;

  ${theme.breakpoints.down('sm')}{
    margin: ${theme.space('small')} 0;
  }
`

const WrapperForm = styled.div`
  width: 500px;
  
  margin: auto;

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
