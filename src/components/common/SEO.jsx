import React from "react";
import Helmet from "react-helmet";
import { injectIntl } from "gatsby-plugin-intl";
import imageURL from "../../../assets/images/hero.jpg";

const SEO = ({ intl }) => {
  const description = intl.formatMessage({ id: "seo.description" });
  const keywords = intl.formatMessage({ id: "seo.keywords" });
  const title = intl.formatMessage({ id: "seo.title" });
  return (
    <Helmet title={title}>
      <html lang="sk" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@gastrobooks" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageURL} />

      <meta property="og:title" content={title} />
      <meta property="og:image" content={imageURL} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
    </Helmet>
  );
};

export default injectIntl(SEO);
