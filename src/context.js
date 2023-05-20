import React, { useContext, useState } from 'react'
import useFetch from './useFetch'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('batman')

  const { data, error, loading } = useFetch(`s=${query}`)

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <AppContext.Provider value={{ handleChange, query, data, error, loading }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlopalContext = () => {
  return useContext(AppContext)
}

export default AppProvider
