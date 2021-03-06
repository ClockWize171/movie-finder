import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncDetail, getAllDetail, removeSelectedItem } from '../../features/movies/MovieSlice';
import {
  Box,
  Text,
  Badge,
  Image,
  SimpleGrid,
  Table,
  TableContainer,
  Tr,
  Tbody,
  Td,
  Spinner,
  Button,
  useMediaQuery
} from '@chakra-ui/react';
import { AiFillCaretLeft } from "react-icons/ai";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getAllDetail);
  useEffect(() => {
    dispatch(fetchAsyncDetail(imdbID))
    return () => {
      dispatch(removeSelectedItem())
    }
  }, [dispatch, imdbID])

  // Rating Checking
  const rating = data.imdbRating <= 5;

  // Screen Size
  const [isNotSmallerScreen] = useMediaQuery("(min-width:713px)");

  function goBack() {
    window.history.back()
  }
  return (
    <div>

      {
        Object.keys(data).length === 0 ?
          (
            <Box pt={10} align='center'>
              <Spinner size='xl' />
            </Box>
          ) :
          (
            <>
              <Button
                colorScheme="purple"
                bgGradient="linear(to-r, purple.400, blue.500, purple.600)" bgClip='button'
                _hover={{
                  bgGradient: 'linear(to-r, blue.400, purple.500, blue.600)',
                }}
                onClick={() => goBack()}
                leftIcon={<AiFillCaretLeft />}
                mt={10}>Go back</Button>
              <SimpleGrid pt={5} columns={[1, null, 2]} spacing='40px'>
                <Box align='center'>
                  <Image
                    fallbackSrc='https://via.placeholder.com/240x380'
                    boxShadow='dark-lg'
                    borderRadius='lg'
                    mt={isNotSmallerScreen ? '8vh' : ''}
                    src={data.Poster}
                    h='30rem'></Image>
                </Box>
                <Box>
                  <Box pt={5}>
                    <Text fontWeight='semibold' fontSize='4xl'>{data.Title}</Text>
                    <Text pt={4} fontWeight='semibold' fontSize='sm'>
                      {data.Year} . {data.Rated} . {data.Runtime}
                    </Text>
                  </Box>

                  <Box pt={5}>
                    <Badge colorScheme='purple' borderRadius='lg' fontSize='xs'>
                      {data.Genre}
                    </Badge>
                  </Box>

                  <Box pt={5}>
                    <Text>
                      ??? IMDb Rating: <Badge colorScheme={rating ? 'red' : 'green'} fontSize='sm'>{data.imdbRating}</Badge>
                    </Text>
                  </Box>

                  <Box pt={5}>
                    <Text>
                      ???? IMDb Votes: <Badge fontSize='sm'>{data.imdbVotes}</Badge>
                    </Text>
                  </Box>

                  <TableContainer borderRadius='lg' mt={5} boxShadow='inner'>
                    <Table size='lg' variant='simple'>
                      <Tbody>
                        <Tr>
                          <Td><strong>Awards</strong></Td>
                          <Td fontWeight='medium'><Badge colorScheme='yellow' fontSize='md'>???? {data.Awards}</Badge></Td>
                        </Tr>
                        <Tr>
                          <Td><strong>Released Date</strong></Td>
                          <Td fontWeight='medium'>{data.Released}</Td>
                        </Tr>
                        <Tr>
                          <Td><strong>Director</strong></Td>
                          <Td fontWeight='medium'>{data.Director}</Td>
                        </Tr>
                        <Tr>
                          <Td><strong>Writers</strong></Td>
                          <Td fontWeight='medium'>{data.Writer}</Td>
                        </Tr>
                        <Tr>
                          <Td><strong>Actors</strong></Td>
                          <Td fontWeight='medium'>{data.Actors}</Td>
                        </Tr>
                        <Tr>
                          <Td><strong>Box Office</strong></Td>
                          <Td fontWeight='medium'>{data.BoxOffice ? data.BoxOffice : <>N/A</>}</Td>
                        </Tr>
                        <Tr>
                          <Td><strong>Language</strong></Td>
                          <Td fontWeight='medium'>{data.Language}</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>

                </Box>
              </SimpleGrid>
            </>
          )
      }
    </div>

  )
}

export default MovieDetail