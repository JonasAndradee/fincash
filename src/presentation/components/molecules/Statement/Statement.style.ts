import styled from 'styled-components'
import theme from '../../../theme'

const Container = styled.div`
  ${theme.typography.normal}
`

const StatementItem = styled.div`
  border: 2px solid rgb(232, 230, 240);
  border-radius: 6px;
  padding: ${theme.space('small')};
  display: flex;
  justify-content: space-between;
  margin-bottom: ${theme.space('micro')};
`

const StatementItemDate = styled.p``

export default {
  Container,
  StatementItem,
  StatementItemDate
}
