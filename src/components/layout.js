import React from 'react'
import Navbar from './navbar';
import Footer from './footer';

const Layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
