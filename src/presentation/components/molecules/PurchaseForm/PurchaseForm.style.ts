import styled from 'styled-components'
import theme from '../../../theme'

const Container = styled.div``

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

export default {
  Container,
  WrapperField,
  DividerLine,
  Button
}
