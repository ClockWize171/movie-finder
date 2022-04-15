import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Box
      pt={5}
      pb={3}
      textAlign="center">
      <Text
        fontSize="sm">©
        <strong>Thet Min Htin</strong> {getYear()} All Rights Reserved.
      </Text>
    </Box>
  )
}

export default Footer