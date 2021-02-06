import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// Footer Styles SCSS Import
import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <div className={footerStyles.container}>
      <p>
        CREATED BY {data.site.siteMetadata.author} ©{new Date().getFullYear()}
      </p>
    </div>
  )
}

export default Footer
