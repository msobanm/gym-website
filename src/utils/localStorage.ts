function getItem(key: string) {
  return localStorage.getItem(key)
}

function setItem(key: string, value: string) {
  localStorage.setItem(key, value)
}

export { getItem, setItem }
