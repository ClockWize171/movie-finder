import React, { useState } from 'react'
import {
    Box,
    Flex,
    Spacer,
    Text,
    InputGroup,
    Input,
    IconButton,
    InputLeftElement,
    useColorMode,
    useMediaQuery,
    Divider,
    useToast
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { SunIcon, MoonIcon, SearchIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/MovieSlice';

const Navbar = () => {
    const [term, setTerm] = useState('');
    const dispatch = useDispatch();

    // Toggle Color Mode 
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === "dark"

    // Screen Size
    const [isNotSmallerScreen] = useMediaQuery("(min-width:713px)");

    // Search Handler
    const toast = useToast();
    const submitHandler = (e) => {
        e.preventDefault();
        if (term === "") return (
            toast({
                position: 'top',
                title: 'Your input is empty!',
                status: 'error',
                duration: 2500,
                isClosable: true
            })
        )
        dispatch(fetchAsyncMovies(term))
        dispatch(fetchAsyncShows(term))
        setTerm('');
    }

    return (
        <>
            <Flex pt={5} pb={3} w='full' >
                <Box>
                    <Link to='/'>
                        <Text
                            bgGradient="linear(to-r, purple.400, blue.500, purple.600)" bgClip='text'
                            fontWeight='bold'
                            fontSize={isNotSmallerScreen ? '3xl' : '2xl'}>
                            Movie Finder
                        </Text>
                    </Link>
                </Box>
                <Spacer />
                <Box
                    pt={isNotSmallerScreen ? 0 : 3}
                    mr={4}>
                    <form action="" onSubmit={submitHandler}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<SearchIcon color='gray.300' />}
                            />
                            <Input
                                value={term}
                                onChange={(e) => setTerm(e.target.value)}
                                type='text'
                                placeholder='Search Here' />
                        </InputGroup>
                    </form>
                </Box>

                <Box
                    pt={isNotSmallerScreen ? 0 : 3}>
                    <IconButton
                        onClick={toggleColorMode}
                        colorScheme="purple"
                        bgGradient="linear(to-r, purple.400, blue.500, purple.600)" bgClip='button'
                        _hover={{
                            bgGradient: 'linear(to-r, blue.400, purple.500, blue.600)',
                        }}
                        icon={isDark ? <SunIcon /> : <MoonIcon />} />
                </Box>
            </Flex>
            <Divider />
        </>
    )
}

export default Navbar