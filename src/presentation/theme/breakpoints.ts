const breakpoints = {
  xs: 0,
  sm: 576,
  md: 769,
  lg: 992,
  xl: 1200
}

type KeyProps = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const unit = 'px'

function up (key: KeyProps, plusOne = false) {
  const value = typeof key === 'number' ? key : breakpoints[key]
  return `@media only screen and (min-width: ${
    value + (plusOne ? 1 : 0)
  }${unit})`
}

function down (key: KeyProps) {
  const value = typeof key === 'number' ? key : breakpoints[key]
  return `@media only screen and (max-width: ${value}${unit})`
}

export const allBreakpoints = breakpoints

export default {
  up,
  down
}
