import { Box, VStack, Heading, Image } from '@chakra-ui/react';
import mysvg from '../assests/home.svg'
import React from 'react'

const Home = () => {
  return (
    <>
    <VStack w={'full'} justifyContent={'center'}>
      <Heading m={'5'} >Library Management Application</Heading>
      <Box width={'50%'} borderWidth={'1px'} borderRadius={'lg'} p={'10'} >
        <Image src={mysvg}></Image>
      </Box>
    </VStack>
    </>
  )
}

export default Home