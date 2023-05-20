import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from './useFetch'
import { Link } from 'react-router-dom'

const SingleMovie = () => {
  const { id } = useParams()
  const {
    data,
    loading,
    error: { show, msg },
  } = useFetch(`i=${id}`)

  if (loading) {
    return <div className='loading'></div>
  }

  if (show) {
    return (
      <div className='page-error'>
        <h1>{msg}</h1>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    )
  }

  const { Year, Title, Plot, Poster } = data
  return (
    <section className='single-movie'>
      <img src={Poster} alt={Title} />
      <div className='single-movie-info'>
        <h2>{Title}</h2>
        <p>{Plot}</p>
        <h4>{Year}</h4>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    </section>
  )
}

export default SingleMovie
