import { ButtonHTMLAttributes } from 'react'
import { css } from 'styled-components'

import colors from './colors'
import typography from './typography'

const smallSize = css`
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  ${typography.small}
`

const baseSize = css`
  padding: 0.75rem 1.5rem;
  border-radius: 1.5rem;
  ${typography.normal}
`

const largeSize = css`
  padding: 1rem 2rem;
  border-radius: 2rem;
  ${typography.lead}
`

const size = {
  small: smallSize,
  base: baseSize,
  large: largeSize
}

interface ICommon extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
}

const common = (background: string, color: string[]) => css<ICommon>`
  text-align: center;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;

  text-decoration: none;
  transition: background-color 0.2s, color 0.2s;
  user-select: none;
  box-sizing: border-box;
  cursor: pointer;

  background: ${colors(background)};
  color: ${colors(color[0], color[1])};
  border: none;
  font-weight: 700;

  &:focus {
    outline: 0;
  }

  &:hover {
    background: ${colors(background, 'dark')};
  }

  &:disabled, &:disabled:hover, &:disabled:focus {
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
  }

  ${({ disabled }) => disabled && `
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
  `}
`

const primary = css`
  ${common('purple', ['white'])}
`

const secondary = css`
  ${common('coal', ['white'])}
`

const style = {
  primary,
  secondary
}

export default {
  size,
  style
}
