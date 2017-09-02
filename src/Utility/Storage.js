const hasLocalStorageSupport = () => {
  try {
    const identifier = + new Date()
    localStorage.setItem(identifier, identifier)
    localStorage.removeItem(identifier)
    return true
  } catch (e) {
    return false
  }
}

export const setItem = (name, value) => {
  if (hasLocalStorageSupport())
    localStorage.setItem(name, JSON.stringify(value))
}

export const getItem = name => {
  if (hasLocalStorageSupport()) {
    const todos = localStorage.getItem(name)
    if (todos)
      return JSON.parse(todos)
  }
  return []
}

export const removeItem = name => {
  if (hasLocalStorageSupport())
    localStorage.removeItem(name)
}