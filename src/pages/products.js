import React from 'react';
import Layout from './../components/layout';
import HeroSection from '../components/heroSection';
import { construction, cienciaDeDatos } from '../data/productsData';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';


const Products = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>GrowHub Products</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="keywords" content={data.site.siteMetadata.keywords} />
        <meta property="og:title" content={data.site.siteMetadata.title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Startup de horticultura tecnológica." />
        <meta property="og:url" content={`${data.site.siteMetadata.url}/products`}/>
        <meta property="og:locale" content="es" />
        <link rel="canonical" href={`${data.site.siteMetadata.url}/products`}/>
      </Helmet>
      <HeroSection {...construction} />
      <HeroSection {...cienciaDeDatos} />
    </Layout>
  );
}
export default Products;

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