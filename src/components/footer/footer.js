import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// React Bootstrap Style Import
import { Container } from "react-bootstrap"

// Footer Styles SCSS Import
import footerStyles from "./footer.module.scss"

// React Icons Import
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

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
    <Container fluid className={footerStyles.container}>
      <div className={footerStyles.copyright}>
        <p>
          CREATED BY {data.site.siteMetadata.author} ©{new Date().getFullYear()}
        </p>
      </div>

      <div className={footerStyles.icons}>
        <a href="https://github.com/Stelios-Ervis-Priftis" target="#">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/ervispriftis/" target="#">
          <FaLinkedin />
        </a>

        <a href="https://www.instagram.com/stelios_priftis/" target="#">
          <FaInstagram />
        </a>
      </div>
    </Container>
  )
}

export default Footer
