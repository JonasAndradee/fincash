const baseUnit = 8
const unit = 'px'

type SpacesKeys = {
  [key: string]: string
}

interface ISpaces extends SpacesKeys {
  zero: string
  auto: string
  micro: string
  small: string
  base: string
  large: string
  mega: string
  giga: string
  tera: string
}

export const spaces: ISpaces = {
  zero: `0${unit}`,
  auto: 'auto',
  micro: `${baseUnit}${unit}`,
  small: `${2 * baseUnit}${unit}`,
  base: `${3 * baseUnit}${unit}`,
  large: `${4 * baseUnit}${unit}`,
  mega: `${6 * baseUnit}${unit}`,
  giga: `${8 * baseUnit}${unit}`,
  tera: `${12 * baseUnit}${unit}`
}

function getSpace (name: string | number, ignoreUnit: boolean) {
  return spaces[name] || spaces.base
}

export default getSpace
