import * as React from "react";
import { graphql } from 'gatsby' //Para hacer las queries
import { MDXRenderer } from 'gatsby-plugin-mdx' //Para poder renderizar el body del mdx
import Layout from "../../components/Layout/layout";

// El componente recibe automaticamente por props el id del nodo mdx correspondiente al proyecto en este caso

const ProjectPost = ({pageContext, data}) => {
  console.log('props de project', pageContext.id, data)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>Fecha: {data.mdx.frontmatter.date}</p>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  );
};

// La Page Query envía por props = {data:} la información de la consulta
export const project = graphql`
query ($id: String) {
    mdx(id: {eq: $id}) {
      body
      frontmatter {
        date
        title
      }
      id
      slug
    }
  }
`

export default ProjectPost;
