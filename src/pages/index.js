import * as React from "react";
import Layout from "../components/Layout/layout";
import { StaticImage } from "gatsby-plugin-image";
import "./index.css";

// Este componente será un carrusel de fotos.
const IndexPage = () => {
  return (
    <Layout pageTitle="Inicio">
      <p>Sitio web para Julian Tujague</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://images.unsplash.com/photo-1429667947446-3c93a979b7e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
    </Layout>
  );
};

export default IndexPage;
