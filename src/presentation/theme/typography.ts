import { css } from 'styled-components'
import font from './font'
import breakpoints from './breakpoints'

const scales = {
  mobile: 1.2,
  tablet: 1.333
}

type SpacesKeys = {
  [key: string]: string
}

interface ISize extends SpacesKeys {
  small: string
  medium: string
  large: string
  big: string
  huge: string
  massive: string
}

const fontSize = (scale: number): ISize => ({
  small: '.8125rem',
  medium: '1rem',
  large: `${scale}rem`,
  big: `${scale ** 2}rem`,
  huge: `${scale ** 3}rem`,
  massive: `${scale ** 4}rem`
})

const lineHeight = (scale: number): ISize => ({
  small: '1rem',
  medium: '1.5rem',
  large: '1.5rem',
  big: `${Math.ceil((scale ** 2) * 2) / 2}rem`,
  huge: `${Math.ceil((scale ** 3) * 2) / 2}rem`,
  massive: `${Math.ceil((scale ** 4) * 2) / 2}rem`
})

const common = (size: string) => css`
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: ${font.family.heroNew};
  font-size: ${fontSize(scales.mobile)[size]};
  line-height: ${lineHeight(scales.mobile)[size]};
  ${breakpoints.up('md')} {
    font-size: ${fontSize(scales.tablet)[size]};
    line-height: ${lineHeight(scales.tablet)[size]};
  }
`

/** Normal texts */

const lead = common('large')

const normal = common('medium')

const small = common('small')

/** Heading texts */

const display = css`
  ${common('massive')}
  font-weight: 700;
`

const h1 = css`
  ${common('huge')}
  font-weight: 700;
`

const h2 = css`
  ${common('big')}
  font-weight: 700;
`

const h3 = css`
  ${common('large')}
  font-weight: 700;
`

const h4 = css`
  ${common('medium')}
  font-weight: 700;
`

const h5 = css`
  ${common('small')}
  font-weight: 400;
`

export default {
  lead,
  normal,
  small,
  display,
  h1,
  h2,
  h3,
  h4,
  h5
}
