import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/MovieSlice'
import MovieLists from '../MovieLists/MovieLists'

const Home = () => {

  const dispatch = useDispatch();
  const movieText = 'Spider';
  const showText = 'Stranger';
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch])

  return (
    <div>
      <MovieLists />
    </div>
  )
}

export default Home