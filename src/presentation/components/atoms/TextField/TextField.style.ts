import { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import theme from '../../../theme'

const Container = styled.div``

const LabelContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.space('micro')};
`

const Label = styled.span`
  ${theme.typography.small}
  color: ${theme.color('coal')};
`

interface IInputContent {
  selected?: boolean
  error?: ReactNode | string
  disabled?: boolean
}

const InputContent = styled.div<IInputContent>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.75rem 1rem;

  border: 2px solid;
  border-color: ${({ error, selected }) => {
    if (selected) return theme.color('steel', 'dark')
    if (error) return theme.color('error')
    return theme.color('steel')
  }};
  border-radius: 8px;
  
  background-color: ${theme.color('white')};
  ${({ disabled }) => disabled && css`
    background-color: ${theme.color('silver')};
  `}
`

const Input = styled.input`
  width: 100%;
  border: none;

  ${theme.typography.normal}
  color: ${theme.color('coal', 'dark')};
  background: transparent;

  ::placeholder {
    color: ${theme.color('steel', 'dark')};
  }

  :invalid {
    box-shadow: none;
  }

  :focus {
    outline: none;
  }

  ${({ disabled }) => disabled && css`
    background-color: transparent;
    cursor: not-allowed;
    pointer-events: none;

    ::placeholder {
      color: ${theme.color('steel', 'dark')};
    }
  `}
`

const MessageContent = styled.div`
  margin-top: ${theme.space('micro')};
  display: inline-flex;

  svg{
    margin-right: ${theme.space('micro')};
  }
`

const MessageLabel = styled.span`
  ${theme.typography.small}
  color: ${theme.color('steel', 'dark')};
`

export default {
  Container,
  LabelContent,
  Label,
  InputContent,
  Input,
  MessageContent,
  MessageLabel
}
