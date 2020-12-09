import React from 'react';
import Layout from './../components/Layout/Layout';
import HeroSection from '../components/HeroSection/HeroSection';
import { seguridad, comunidad } from '../data/signupData';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

const SignUp = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>GrowHub Sign-Up</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="keywords" content={data.site.siteMetadata.keywords} />
        <meta property="og:title" content={data.site.siteMetadata.title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Startup de horticultura tecnológica." />
        <meta property="og:url" content={`${data.site.siteMetadata.url}/signup`}/>
        <meta property="og:locale" content="es" />
        <link rel="canonical" href={`${data.site.siteMetadata.url}/signup`}/>
      </Helmet>
      <HeroSection {...seguridad} />
      <HeroSection {...comunidad} />
    </Layout>
  );
}

export default SignUp;

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