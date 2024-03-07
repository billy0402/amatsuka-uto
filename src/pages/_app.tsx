import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from '@/components/Layout';
import {
  seoDescription,
  seoFavoriteIcon,
  seoSocialPreviewImage,
  seoTitle,
  seoUrl,
} from '@/fixtures/seo';
import '@/styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>{seoTitle}</title>
        <link rel='shortcut icon' type='image/x-icon' href={seoFavoriteIcon} />
        <link rel='icon' type='image/x-icon' href={seoFavoriteIcon} />
        <link rel='apple-touch-icon' href={seoFavoriteIcon} />
        <link rel='bookmark' href={seoFavoriteIcon} />

        {/* Primary Meta Tags */}
        <title>{seoTitle}</title>
        <meta name='title' content={seoTitle} />
        <meta name='description' content={seoDescription} />
        <meta
          name='keywords'
          content='天使うと,あまつかうと,Amatsuka Uto,Uto,Vtuber'
        />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content={seoUrl} />
        <meta property='og:title' content={seoTitle} />
        <meta property='og:description' content={seoDescription} />
        <meta property='og:image' content={seoSocialPreviewImage} />

        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={seoUrl} />
        <meta property='twitter:title' content={seoTitle} />
        <meta property='twitter:description' content={seoDescription} />
        <meta property='twitter:image' content={seoSocialPreviewImage} />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
