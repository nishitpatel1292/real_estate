import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import {  useState } from 'react';
import { useMediaQuery } from "@chakra-ui/react";





const Navbar = () => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const Hover = {
    backgroundColor: '#f8f9fa',
    borderColor: '#dadce0',
    borderRadius: '5%',
    boxShadow: 'rgba(0, 0, 0, .1) 2px 2px 2px'

  };
  return (
    <>
      <Flex p='2' borderBottom='1px' borderColor='gray.100'>

        <Box fontSize='3xl' color='blue.400' fontWeight='bold' paddingLeft='2em' alignSelf='center' >
          <Link href='/' passHref>WebEstate </Link>
        </Box>
        <Spacer />
        {isMobile && (<Menu>
          <MenuButton
            as={Box}
            fontSize='3xl'
            color='blue.400'
            fontWeight='bold'
            marginRight='1em'
            alignSelf='center'
            onClick={toggleMenu}
            style={{ cursor: 'pointer' }}
            _active={{ bg: 'none' }}
          >
            &#9776;
          </MenuButton>
          <MenuList>
            <Link href='/search' passHref>
              <MenuItem  >
                <BsSearch style={{ width: '14px', height: '14px', marginRight: '8px' }} />
                <span>Search</span>
              </MenuItem>
            </Link>
            <MenuItem>
              <Link href='/' passHref>Home</Link>
            </MenuItem>
            <MenuItem>
              <Link href='/' passHref>Buy Property</Link>
            </MenuItem>
            <MenuItem>
              <Link href='/' passHref>Rent Property</Link>
            </MenuItem>
          </MenuList>
        </Menu>)}



        {!isMobile && (
          <>
            <Box onClick={() => {
              window.location.href = '/search';
            }}
              fontSize='l' color='black.400' fontWeight='medium' alignSelf='center' display="flex" padding='0.2em 0.5em' flexDirection='row' alignItems='center' gap='2' marginLeft='2em' _hover={{ color: 'blue.400', cursor: 'pointer', ...Hover }}>

              <BsSearch style={{ width: '14px', height: '14px', marginTop: '4px' }} /> <span>Search</span>

            </Box>
            <Box fontSize='l' color='black.400' fontWeight='medium' alignSelf='center' padding='0.2em 0.5em' marginLeft='2em' _hover={{ color: 'blue.400', cursor: 'pointer', ...Hover }}>
              <Link href='/'>Home</Link>
            </Box>
            <Box fontSize='l' color='black.400' fontWeight='medium' alignSelf='center' marginLeft='2em' padding='0.2em 0.5em' _hover={{ color: 'blue.400', cursor: 'pointer', ...Hover }}>
              <Link href='/'>Buy Property</Link>
            </Box>
            <Box fontSize='l' color='black.400' fontWeight='medium' alignSelf='center' padding='0.2em 0.5em' marginInline='2rem' _hover={{ color: 'blue.400', cursor: 'pointer', ...Hover }}>
              <Link href='/'>Rent Property</Link>
            </Box>
          </>
        )}
      </Flex>
    </>
  );
};

export default Navbar;




