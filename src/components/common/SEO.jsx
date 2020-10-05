import React from "react";
import { useIntl, IntlContextConsumer } from "gatsby-plugin-intl";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

const SEO = ({ title, description }) => {
  const intl = useIntl();

  const titleTemplate = title
    ? `${title} | %s`
    : intl.formatMessage({ id: "seo.title" });
  const keywords = intl.formatMessage({ id: "seo.keywords" });
  const defaultDescription = intl.formatMessage({ id: "seo.description" });

  return (
    <IntlContextConsumer>
      {({ language }) => (
        <Helmet
          htmlAttributes={{
            lang: language
          }}
          title="BigFishTask"
          titleTemplate={titleTemplate}
          meta={[
            {
              name: `description`,
              content: description || defaultDescription
            },
            {
              name: `keywords`,
              content: keywords
            },
            {
              property: `og:title`,
              content: title
            },
            {
              property: `og:description`,
              content: description
            },
            {
              property: `og:type`,
              content: `website`
            },
            {
              name: `twitter:card`,
              content: `summary`
            },
            {
              name: `twitter:creator`,
              content: "author"
            },
            {
              name: `twitter:title`,
              content: title
            },
            {
              name: `twitter:description`,
              content: description
            }
          ]}
        />
      )}
    </IntlContextConsumer>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default SEO;
