type Colors = {
  [key: string]: string
}

type ColorsKeys = {
  [key: string]: Colors
}

const base: ColorsKeys = {
  purple: {
    default: '#7C3AED',
    light: '#EDE9FE',
    dark: '#5B21B6'
  },
  coal: {
    default: '#4E4666',
    light: '#68617D',
    dark: '#312B45'
  },
  steel: {
    default: '#C0BBCD',
    light: '#D6D3DF',
    dark: '#867F99'
  },
  silver: {
    default: '#F2F0F7',
    light: '#F9F7FC',
    dark: '#E8E6F0'
  },
  red: {
    default: '#FF3859',
    light: '#FF5E78',
    dark: '#DC2542'
  }
}

const alerts: ColorsKeys = {
  error: {
    default: '#EF4444',
    light: '#FF5E78',
    dark: '#DC2542'
  },
  success: {
    default: '#41C483',
    light: '#65DDA1',
    dark: '#33AD70'
  }
}

const singles: ColorsKeys = {
  white: {
    default: '#ffffff'
  }
}

const colors = {
  ...base,
  ...alerts,
  ...singles
}

function getColor (name:string, variant = 'default') {
  if (!colors[name]) {
    return colors.purple.default
  }

  if (!colors[name][variant]) {
    return colors[name].default
  }

  return colors[name][variant]
}

export const allColors = colors

export default getColor
