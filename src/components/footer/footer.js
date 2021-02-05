import React from "react"

// Footer Styles SCSS Import
import footerStyles from "./footer.module.scss"

const Footer = () => {
  const date = new Date().getFullYear()

  return (
    <div className={footerStyles.container}>
      <p>CREATED BY STELIOS PRIFTIS ©{date}</p>
    </div>
  )
}

export default Footer
