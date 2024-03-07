import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from '@/components/Layout';
import { basePath } from '@/fixtures/env';
import '@/styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Amatsuka Uto | Blanche Ailes</title>
        <link
          rel='shortcut icon'
          type='image/x-icon'
          href={`${basePath}/favicon.ico`}
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
