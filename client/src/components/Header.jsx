import { Button, Drawer, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay,DrawerBody, useDisclosure, VStack, HStack, } from '@chakra-ui/react';
import {BiMenuAltLeft} from 'react-icons/bi';
import {Link} from 'react-router-dom';
import React from 'react';

const Header = () => {

  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>

    <Button
      zIndex={'overlay'}
      pos={'fixed'}
      top={'4'}
      left={'4'}
      colorScheme={'whatsapp'}
      p={'0'}
      w={'10'}
      borderRadius={'50%'}
      onClick={onOpen}
    >
      <BiMenuAltLeft size={'20'} />
    </Button>

    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
      <DrawerOverlay />

      <DrawerContent>

        <DrawerCloseButton />
        <DrawerHeader>Operations</DrawerHeader>
        <DrawerBody>
          <VStack >
            <Button onClick={onClose} variant={'ghost'} colorScheme='whatsapp'>
              <Link to={'/'}>Home</Link>
            </Button>
            <Button onClick={onClose} variant={'ghost'} colorScheme='whatsapp'>
              <Link to={'/books'}>Get All Books</Link>
            </Button>
            <Button onClick={onClose} variant={'ghost'} colorScheme='whatsapp'>
              <Link to={'/books:id'}>Get A Book</Link>
            </Button>
            <Button onClick={onClose} variant={'ghost'} colorScheme='whatsapp'>
              <Link to={'/books'}>Post A Book</Link>
            </Button>
            <Button onClick={onClose} variant={'ghost'} colorScheme='whatsapp'>
              <Link to={'/books:id'}>Update</Link>
            </Button>
            <Button onClick={onClose} variant={'ghost'} colorScheme='whatsapp'>
              <Link to={'/books:id'}>Delete</Link>
            </Button>
          </VStack>

          <HStack w={'full'} pos={'absolute'} left={'0'} bottom={'10'} justifyContent={'space-evenly'}>
            <Button onClick={onClose} colorScheme='whatsapp'>
              <Link to={'/login'}>Log In</Link>
            </Button>
            <Button onClick={onClose} colorScheme='whatsapp' variant={'outline'}>
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
          </HStack>

        </DrawerBody>

      </DrawerContent>

    </Drawer>

    
    </>
  )
}

export default Header