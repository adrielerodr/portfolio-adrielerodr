import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

export default function SEO({ headTitle }) {
  const pageTitleDefault = 'Adriele Rodrigues';
  const pageUrl = 'https://portfolio-adrielerodr-adrielerodr.vercel.app/';
  const pageImage = 'https://www.alura.com.br/assets/img/alura-share.1571848411.png';
  const pageDescription = 'Adriele Rodrigues - Web Developer';

  const hasHeadTitle = Boolean(headTitle);
  const title = hasHeadTitle
    ? (`${headTitle} | ${pageTitleDefault}`)
    : (pageTitleDefault);

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={pageDescription} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={pageImage} />
    </Head>
  );
}

SEO.defaultProps = {
  headTitle: '',
};

SEO.propTypes = {
  headTitle: PropTypes.string,
};
