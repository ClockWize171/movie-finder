import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Image, Text, useMediaQuery } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MovieBox = (props) => {
  const { data } = props;

  // Screen Size
  const [isNotSmallerScreen] = useMediaQuery("(min-width:713px)");
  return (
    <motion.div
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}>
      <Link to={`/movie/${data.imdbID}`}>
        <Box maxW='md'
          borderWidth='2px'
          height='full'
          borderRadius='lg'>
          <Box align='center'>
            <Image
              fallbackSrc='https://via.placeholder.com/240'
              borderRadius='lg'
              src={data.Poster}
              w='full'
              h={isNotSmallerScreen ? '20rem' : '30rem'} />
          </Box>
          <Box p={3}>
            <Text fontWeight="semibold">
              {data.Title}
            </Text>
            <Text pt={2} fontSize='sm'>
              {data.Year}
            </Text>
          </Box>
          <Box>
          </Box>
        </Box>
      </Link>
    </motion.div>

  )
}

export default MovieBox