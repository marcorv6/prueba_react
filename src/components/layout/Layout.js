import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => (
  <div className="Layout">
    <Header />
    <div className="Content">{props.children}</div>
    <Footer />
  </div>
);

export default Layout