const base = {
  purple: {
    default: '#7C3AED',
    light: '#665980',
    dark: '#231653'
  }
}

const alerts = {
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

const singles = {
  white: {
    default: '#ffffff'
  }
}

const colors = {
  ...base,
  ...alerts,
  ...singles
}

export default { colors }
