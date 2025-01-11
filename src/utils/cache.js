const CACHE_KEY = 'shiftManagementCache'

export const saveToCache = (data) => {
  localStorage.setItem(CACHE_KEY, JSON.stringify(data))
}

export const loadFromCache = () => {
  const cachedData = localStorage.getItem(CACHE_KEY)
  return cachedData ? JSON.parse(cachedData) : null
}

export const clearCache = () => {
  localStorage.removeItem(CACHE_KEY)
}

export const getCacheStatus = () => {
  const cachedData = localStorage.getItem(CACHE_KEY)
  return cachedData ? 'active' : 'empty'
}
