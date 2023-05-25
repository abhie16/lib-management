import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'} >
        <form>
            <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
                <Heading>Welcome Back!</Heading>
                <Input placeholder='Enter Email Here...' type={'email'} required focusBorderColor='whatsapp.500' />
                <Input placeholder='Password' type={'password'} required focusBorderColor='whatsapp.500' />

                <Button variant={'link'} alignSelf={'flex-end'}>
                    <Link to={'/signup'}>Forget Password?</Link>
                </Button>

                <Button type='submit' colorScheme={'whatsapp'}>Log In</Button>

                <Text textAlign={'right'}>
                    New User?{' '}
                    <Button variant={'link'} colorScheme={'whatsapp'}>
                        <Link to={'/signup'}>Sign Up</Link>
                    </Button>
                </Text>
            </VStack>
        </form>
    </Container>
  )
}

export default Login