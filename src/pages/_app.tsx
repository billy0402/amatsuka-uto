import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from '@components/Layout';
import '@styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Amatsuka Uto | Blanche Ailes</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
