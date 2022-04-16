import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MovieBox = (props) => {
  const { data } = props;

  // // Screen Size
  // const [isNotSmallerScreen] = useMediaQuery("(min-width:713px)");

  return (
    <motion.div
      transition={{ duration: 0.3 }}
      whileTap={{ scale: 0.9 }}>
      <Link to={`/movie/${data.imdbID}`}>
        <Box
          ml={3}
          w={['50vw', '30vw', '30vw', '15vw']}
          borderWidth='2px'
          height='full'
          borderRadius='lg'>
          <Box style={{
            pointerEvents: "none"
          }} align='center'>
            <Image
              fallbackSrc='https://via.placeholder.com/240'
              borderRadius='lg'
              src={data.Poster}
              w='full'
              h='40vh' />
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