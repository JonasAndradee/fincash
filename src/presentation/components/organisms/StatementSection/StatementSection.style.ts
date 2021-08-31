import styled from 'styled-components'
import theme from '../../../theme'

const Container = styled.div`
  background-color: ${theme.color('white')};

  width: 60%;
  height: 60vh;
  min-width: 300px;

  margin: ${theme.space('giga')} auto;
  margin-bottom: 15vh ;
  padding: ${theme.space('base')};

  ${theme.breakpoints.down('md')}{
    margin-top: ${theme.space('giga')};
    height: auto;
  }
`

const AmountInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-bottom: ${theme.space('giga')};
`

const AmountText = styled.p`
  ${theme.typography.h2}
  margin-left: ${theme.space('small')};
  color: ${theme.color('coal')};
`

const BalanceText = styled.p`
  ${theme.typography.normal}
  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-weight: bold;
  color: ${theme.color('purple')};

  margin-bottom: ${theme.space('micro')};
`

const Button = styled.button`
  ${theme.button.style.primary}
  ${theme.button.size.base}

  width: 200px;
`

const StatementContainer = styled.div`
  width: 80%;
  min-width: 300px;
  margin: 0 auto;
`

export default {
  Container,
  AmountInfo,
  Button,
  AmountText,
  BalanceText,
  StatementContainer
}
