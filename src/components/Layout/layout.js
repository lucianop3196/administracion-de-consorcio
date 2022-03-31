import * as React from "react";
import {  useStaticQuery, graphql } from "gatsby";
import Navbar from "../Navbar/Navbar";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      {/* <header>{data.site.siteMetadata.title}</header> */}
       <Navbar/>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
