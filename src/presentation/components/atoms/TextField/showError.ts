type Meta = {
  touched?: boolean
  error?: string
  submitError?: string
  dirtySinceLastSubmit?: boolean
}

function showError (meta: Meta) {
  const {
    touched, error, submitError, dirtySinceLastSubmit
  } = meta
  if (!touched || (dirtySinceLastSubmit)) return ''

  return (error || submitError || '')
}

export default showError
