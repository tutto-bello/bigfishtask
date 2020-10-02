import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { Layout } from '../components/common';

const NotFoundPage = () => {
  const intl = useIntl();
  return (
    <Layout
      seo={{
        title: intl.formatMessage({ id: '404' })
      }}
    >
      <img
        src="/icons/404.svg"
        width="250"
        alt="Adress"
        className="m-auto mt-32 md:mt-56 "
      />{' '}
      <h3 className="text-center text-6xl text-black mt-10">404</h3>
      <h1 className="text-center text-3xl mt-10">
        {intl.formatMessage({ id: '404' })}
      </h1>
    </Layout>
  );
};

export default NotFoundPage;
