import React from 'react';
import PropTypes from 'prop-types';
import SEO from './SEO';
import Nav from './Nav';

const Layout = ({ children, seo }) => {
  const { title, description } = seo;

  return (
    <>
      <SEO title={title || ''} description={description || ''} />
      <Nav />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  seo: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  })
};

Layout.defaultProps = {
  seo: {
    title: '',
    description: ''
  }
};

export default Layout;
