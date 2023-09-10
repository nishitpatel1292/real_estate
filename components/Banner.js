import React from 'react'
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, LinkName, imageUrl }) => {
  return (
    <Flex
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center" m='10'
    >
      <Image src={imageUrl} width={500} height={300} />
      <Box p='5'>
        <Text color='gray.500' fontSize='sm' fontWeight='medium'>{purpose}</Text>

        <Text fontSize='3xl' fontWeight='bold'>{title1}<br />{title2}</Text>

        <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.700'>{desc1}<br />{desc2}</Text>

        <Button fontSize='xl' bg="blue.300" variant="ghost" color="white"
        _hover={{
          bg:'green.400',
          transform:'scale(1.1)',
        }}
        _active={{
          bg:'red.400',
          transform:'scale(1.1)',
        }}
        >

          <Link href={'/'}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  );
}

export default Banner