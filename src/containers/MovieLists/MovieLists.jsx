import React from 'react'
import MovieBox from '../../components/MovieBox/MovieBox';
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movies/MovieSlice';
import { SimpleGrid, Text, Box, Divider } from '@chakra-ui/react';

const MovieLists = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies, renderShows = "";


  renderMovies = movies.Response === 'True' ? (
    <SimpleGrid pt={5} columns={[1, 3, 5]} spacing='40px'>
      {movies.Search.map((movie, index) => (
        <MovieBox key={index} data={movie} />
      ))}
    </SimpleGrid>
  ) : (
    <div>
      <h3>
        {movies.Error}
      </h3>
    </div>
  )

  renderShows = shows.Response === 'True' ? (
    <SimpleGrid pt={5} columns={[1, 3, 5]} spacing='40px'>
      {shows.Search.map((show, index) => (
        <MovieBox key={index} data={show} />
      ))}
    </SimpleGrid>
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
          // bgGradient={useColorMode("red", "blue")}
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