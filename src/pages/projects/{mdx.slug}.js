import * as React from "react";
import { graphql } from "gatsby"; //Para hacer las queries
import { MDXRenderer } from "gatsby-plugin-mdx"; //Para poder renderizar el body del mdx
import Layout from "../../components/Layout/layout";
import { withScriptjs, withGoogleMap } from "react-google-maps";
import Map from "../../components/Map/map";

// El componente recibe automaticamente por props el id del nodo mdx correspondiente al proyecto en este caso

const ProjectPost = ({ data }) => {
  const WrappedMap = withScriptjs(withGoogleMap(Map));
  return (
    <Layout>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <p>Puntos de colectores en Lincoln:</p>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.GATSBY_MAP_API_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        // year={"333"}
      />
    </Layout>
  );
};

// La Page Query envía por props = {data:} la información de la consulta
export const project = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        subtitle
      }
      id
      slug
    }
  }
`;

export default ProjectPost;
