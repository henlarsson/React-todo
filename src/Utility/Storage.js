const hasSessionStorageSupport = () => {
  try {
    const identifier = + new Date()
    sessionStorage.setItem(identifier, identifier)
    sessionStorage.removeItem(identifier)
    return true
  } catch (e) {
    return false
  }
}

export const setItem = (name, value) => {
  if (hasSessionStorageSupport()) {
    sessionStorage.setItem(name, JSON.stringify(value))
  }
}

export const getItem = name => {
  if (hasSessionStorageSupport()) {
    return JSON.parse(sessionStorage.getItem(name))
  }
  return []
}

export const removeItem = name => {
  if (hasSessionStorageSupport()) {
    sessionStorage.removeItem(name)
  }
}