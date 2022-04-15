import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import Navbar from '../../components/Navbar/Navbar'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/MovieSlice'
import MovieLists from '../MovieLists/MovieLists'

const Home = () => {

  const dispatch = useDispatch();
  const movieText = 'avengers';
  const showText = 'Stranger';
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch])

  return (
    <div>
      <Navbar />
      <MovieLists />
    </div>
  )
}

export default Home