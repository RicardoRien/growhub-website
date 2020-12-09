import React from "react";
import './index.css';
import Layout from './../components/Layout/Layout';
import HeroSection from './../components/HeroSection/HeroSection';
import { tecnologia, comunidad, seguridad, estadistica } from '../data/indexData';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>GrowHub</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="keywords" content={data.site.siteMetadata.keywords} />
        <meta property="og:title" content={data.site.siteMetadata.title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Startup de horticultura tecnológica." />
        <meta property="og:url" content={data.site.siteMetadata.url}/>
        <meta property="og:locale" content="es" />
        <link rel="canonical" href={data.site.siteMetadata.url}/>
      </Helmet>
      <HeroSection {...tecnologia} />
      <HeroSection {...comunidad} />
      <HeroSection {...seguridad} />
      <HeroSection {...estadistica} />
    </Layout>
  )
}
export default IndexPage;

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