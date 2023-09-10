import '@/styles/globals.css'
import Head from 'next/head';
Head;

import { ChakraProvider } from '@chakra-ui/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        {/* <Layout> */}
          <Component {...pageProps} />
        {/* </Layout> */}
      </ChakraProvider>
    </>
  );
}
