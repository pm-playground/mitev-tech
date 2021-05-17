import React from "react"
import {  graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import * as style from "../styles/home.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({data}) {
console.log(data)
const image = getImage(data.file.childImageSharp)
  return (
    <Layout>
      <section className={style.header}>
        <div>
          <h2>Plan</h2>
          <h3>Develop</h3>
          <p>Full Stack Web Developer based in Berlin</p>
          <Link className={style.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
      <GatsbyImage image={image}/>
      </section>
    </Layout>
  )
}

export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      gatsbyImageData( formats: [AUTO,WEBP, AVIF])
    }
  }
}

`

//! ...GatsbyImageSharpFluid => this is a fragment! ->packaging a number set of properties that for a responsive image.
