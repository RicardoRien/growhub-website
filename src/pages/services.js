import React from 'react';
import Layout from './../components/layout';
import Pricing from './../components/pricing';
import HeroSection from '../components/heroSection';
import { invest } from '../data/serviceData';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

const Services = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>GrowHub Services</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="keywords" content={data.site.siteMetadata.keywords} />
        <meta property="og:title" content={data.site.siteMetadata.title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Startup de horticultura tecnológica." />
        <meta property="og:url" content={`${data.site.siteMetadata.url}/services`}/>
        <meta property="og:locale" content="es" />
        <link rel="canonical" href={`${data.site.siteMetadata.url}/services`}/>
      </Helmet>
      <Pricing />
      <HeroSection {...invest} />
    </Layout>
  );
}

export default Services;

export const query = graphql`
{
  site {
    siteMetadata {
      title
      url
      keywords
      description
    }
  }
}`