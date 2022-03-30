import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout/layout";
// markup
const ProjectPage = ({ data }) => {
  return (
    <Layout pageTitle="Proyectos">
      {data.allMdx.nodes?.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/projects/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>Actualizado: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export const projects = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: ASC }) {
      nodes {
        frontmatter {
          title
          date
        }
        slug
        id
      }
    }
  }
`;

export default ProjectPage;
