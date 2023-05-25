import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'} >
        <form>
            <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
                <Heading>Lib</Heading>
                <Avatar alignSelf={'center'} boxSize={['31','32']} />
                
                <Input placeholder='Enter Your Name' type={'text'} required focusBorderColor='whatsapp.500' />
                <Input placeholder='Enter Email Here...' type={'email'} required focusBorderColor='whatsapp.500' />
                <Input placeholder='Password' type={'password'} required focusBorderColor='whatsapp.500' />


                <Button type='submit' colorScheme={'whatsapp'}>Sign Up</Button>

                <Text textAlign={'right'}>
                    Already Signed Up?{' '}
                    <Button variant={'link'} colorScheme={'whatsapp'}>
                        <Link to={'/login'}>Log In</Link>
                    </Button>
                </Text>
            </VStack>
        </form>
    </Container>
  )
}

export default Signup