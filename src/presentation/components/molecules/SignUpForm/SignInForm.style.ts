import styled from 'styled-components'
import theme from '../../../theme'

const Container = styled.div`
  background: ${theme.color('white')};

  padding: ${theme.space('base')};

  border: 1px solid ${theme.color('steel')};
  box-sizing: border-box;
  border-radius: 12px;
`

const WrapperField = styled.div`
  margin-top: ${theme.space('base')};
`

const DividerLine = styled.div`
  border: 1px solid ${theme.color('silver', 'dark')};

  margin: ${theme.space('small')} 0;
`

const Button = styled.button`
  ${theme.button.style.primary}
  ${theme.button.size.base}

  width: 100%;
`

const Error = styled.div`
  ${theme.typography.normal}

  background-color: ${theme.color('red')};
  border-radius: 6px;
  padding: ${theme.space('micro')};
  color: ${theme.color('white')};
`

const SigInLink = styled.a`
  ${theme.typography.normal}

  margin-top: ${theme.space('base')};
  color: ${theme.color('purple')};

  text-decoration: underline;
  cursor: pointer;
`

export default {
  Container,
  WrapperField,
  DividerLine,
  Button,
  Error,
  SigInLink
}
