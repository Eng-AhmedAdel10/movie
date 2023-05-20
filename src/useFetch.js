import { useState, useEffect } from 'react'
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

export const useFetch = (urlParams) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({ show: false, msg: '' })

  const fetchMovies = async (url) => {
    setLoading(true)
    try {
      const res = await fetch(url)
      const data = await res.json()
      if (data.Response === 'True') {
        setData(data.Search || data)
        setError({ show: false, msg: '' })
      } else {
        setError({ show: true, msg: data.Error })
      }
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
    return { loading, error, data }
  }

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}&${urlParams}`)
  }, [urlParams])

  return { data, error, loading }
}

export default useFetch
