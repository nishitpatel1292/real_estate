import '@/styles/globals.css'
import Head from 'next/head';
Head;
import nProgress from 'nprogress';
import { ChakraProvider} from '@chakra-ui/react';
import { Router } from 'next/router';
import Layout from '@/components/layout';
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>

      </Head>
      <ChakraProvider >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
