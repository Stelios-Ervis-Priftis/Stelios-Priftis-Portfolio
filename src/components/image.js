import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hero.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      imageNotFound: file(relativePath: { eq: "image-not-found.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return (
      <div>
        <Img
          fluid={data.imageNotFound.childImageSharp.fluid}
          alt="Image not found"
        />
        <p style={{ textAlign: "center", fontWeight: "bold" }}>
          Image Not Found
        </p>
      </div>
    )
  }

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      className="rounded-circle"
      alt="Hero of the pic"
    />
  )
}

export default Image
