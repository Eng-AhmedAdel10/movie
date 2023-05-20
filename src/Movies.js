import React from 'react'
import { Link } from 'react-router-dom'
import { useGlopalContext } from './context'

const defaultImg =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  const { loading, data } = useGlopalContext()

  if (loading) {
    return <div className='loading'></div>
  }

  return (
    <section className='movies'>
      {data.map((movie) => {
        const { Title, Year, Poster, imdbID } = movie
        return (
          <Link key={imdbID} to={`/movies/${imdbID}`} className='movie'>
            <article>
              <img src={Poster !== 'N/A' ? Poster : defaultImg} alt={Title} />
              <div className='movie-info'>
                <h4>{Title}</h4>
                <p>{Year}</p>
              </div>
            </article>
          </Link>
        )
      })}
    </section>
  )
}

export default Movies
