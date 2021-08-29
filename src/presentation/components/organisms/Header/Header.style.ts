import styled from 'styled-components'
import theme from '../../../theme'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 ${theme.space('base')};

  background: ${theme.color('white')};
`

const Title = styled.p`
  ${theme.typography.h2}
`

const Button = styled.button`
  ${theme.button.style.primary}
  ${theme.button.size.base}

  background: linear-gradient(103.45deg, #C026D3 -0.96%, #7C3AED 92.04%);
  box-shadow: 0px 2px 12px -4px rgba(124, 58, 237, 0.32);
`

const Link = styled.a`
  ${theme.typography.normal}
  color: ${theme.color('white')};
  text-decoration: none;

  display: flex;
  align-items: center;
`

const Label = styled.p`
  padding: 0;
  margin: 0;

  ${theme.breakpoints.down('md')}{
    display: none;
  }
`

export default {
  Container,
  Title,
  Button,
  Link,
  Label
}
