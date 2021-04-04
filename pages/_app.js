/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Head from 'next/head';
import SEO from '../src/components/commons/SEO';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Adriele Rodrigues</title>
        <link rel="icon" type="image/ico" href="/images/Icon.ico" sizes="32x32" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,500;0,700;1,100&display=swap" rel="stylesheet" />
      </Head>
      <SEO headTitle="Home" />
      <Component {...pageProps} />
    </>
  );
}
