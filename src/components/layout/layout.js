import React from "react"

// Components Import
import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"

// External Style Import
import "bootstrap/dist/css/bootstrap.min.css"

// Sass Starter Style Import
import "../../styles/index.scss"

// Layout Styles SCSS Import
import layoutStyles from "./layout.module.scss"

const Layout = props => (
  <div className={layoutStyles.container}>
    <div className={layoutStyles.content}>
      <Navbar />
      {props.children}
    </div>

    <Footer />
  </div>
)

export default Layout
