import React, { useState, useEffect, useRef } from 'react'
import MovieBox from '../../components/MovieBox/MovieBox';
import './MovieLists.css'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movies/MovieSlice';
import {  Text, Box, Divider } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MovieLists = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies, renderShows = "";

  // Carousel Settings
  const [width, setWidth] = useState(0)
  const carousel = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      const scrollWidth = carousel.current.scrollWidth
      const offsetWidth = carousel.current.offsetWidth
      setWidth(scrollWidth - offsetWidth)
    }, 500)
  }, [carousel])


  renderMovies = movies.Response === 'True' ? (
    <Box paddingTop={5}>
      <motion.div
        ref={carousel}
        className='carousel'
        whileTap={{ cursor: "grabbing" }}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel">
          {movies.Search.map((movie, index) => (
            <MovieBox key={index} data={movie} />
          ))}
        </motion.div>
      </motion.div>
    </Box>
  ) : (
    <div>
      <h3>
        {movies.Error}
      </h3>
    </div>
  )

  renderShows = shows.Response === 'True' ? (
    // <SimpleGrid pt={5} columns={[1, 3, 5]} spacing='40px'>
    //   {shows.Search.map((show, index) => (
    //     <MovieBox key={index} data={show} />
    //   ))}
    // </SimpleGrid>
    <Box paddingTop={5}>
      <motion.div
        ref={carousel}
        className='carousel'
        whileTap={{ cursor: "grabbing" }}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel">
          {shows.Search.map((show, index) => (
            <MovieBox key={index} data={show} />
          ))}
        </motion.div>
      </motion.div>
    </Box>
  ) : (
    <div>
      <h3>
        {shows.Error}
      </h3>
    </div>
  )


  return (
    <div>
      <Box w='150px'>
        <Text
          pt={2}
          bgGradient="linear(to-r, purple.400, blue.500, purple.600)"
          bgClip='text'
          fontSize='4xl'
          fontWeight='bold'>
          Movies
        </Text>
      </Box>
      {renderMovies}
      <Divider pt={10} />
      <Box w='150px'>
        <Text
          pt={2}
          bgGradient="linear(to-r, purple.400, blue.500, purple.600)"
          bgClip='text'
          fontSize='4xl'
          fontWeight='bold'>
          Shows
        </Text>
      </Box>
      {renderShows}
    </div>

  )
}

export default MovieLists