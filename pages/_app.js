import '@/styles/globals.css'
import Head from 'next/head';
Head;
import nProgress from 'nprogress';
import { ChakraProvider} from '@chakra-ui/react';
import { Router } from 'next/router';
export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider >
        {/* <Layout> */}
          <Component {...pageProps} />
        {/* </Layout> */}
      </ChakraProvider>
    </>
  );
}
