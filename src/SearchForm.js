import React from 'react'
import { useGlopalContext } from './context'
const SearchForm = () => {
  const {
    handleChange,
    error: { show, msg },
    query,
  } = useGlopalContext()
  return (
    <form className='search-form'>
      <h2>Search Movies</h2>
      <input
        type='text'
        className='form-input'
        onChange={handleChange}
        value={query}
      />
      {show && <div className='error'>{msg}</div>}
    </form>
  )
}

export default SearchForm
