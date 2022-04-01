import * as React from "react";
import {  useStaticQuery, graphql } from "gatsby";
import Navbar from "../Navbar/Navbar";
import {footer} from "./layout.module.css"

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
      <footer className={footer}>
        <h3>Más Conciencia (LOGO)</h3>
        <p> Contactanos - Tel: +542355-521097 </p>
        <p>Localidad de Lincoln - Buenos Aires</p>
        <p>Poner íconos de redes sociales</p>
      </footer>
    </div>
  );
};

export default Layout;
