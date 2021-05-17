import { graphql, Link } from "gatsby"
import React from "react"
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'
import { GatsbyImage, getImage   } from "gatsby-plugin-image"


export default function Projects({data}) {
  
  console.log(data)
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Website I've Created</h3>
        <div className={styles.projects}>
          {
            projects.map(project => (
              <Link to={"/projects/" + project.frontmatter.slug} key={project.id}> 
              <GatsbyImage image={getImage(project.frontmatter.thumbnail.childImageSharp.gatsbyImageData)} alt="Banner" />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </Link>
            ))
          }
        </div>
        <p>Like what you see? Email me at {contact} for a quote!</p>
      </div>
    </Layout>
  )
}

// export page query

export const query = graphql`
query ProjectPage {
  projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
      frontmatter {
          title
          stack
          slug
          thumbnail {
          childImageSharp {
              gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
              )
          }
          }
      }
      id
      }
  }
  contact: site {
      siteMetadata {
      contact
      }
  }
  }
`
//! projects: allMarkdownRemark => renaming `allMarkdownRemark` to `projects`
//! contact: site => renaming `site` to `contact`
