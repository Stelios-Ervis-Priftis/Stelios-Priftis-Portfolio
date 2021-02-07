import React from "react"
import { Link } from "gatsby"

// Component Import
import SEO from "../../components/seo"
import Layout from "../../components/layout/layout"
import Image from "../../components/image"

// React Bootstrap Import
import { Container, Row, Col, Button } from "react-bootstrap"

// Style Import
import indexStyles from "./index.module.scss"

const Index_Page = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container fluid className={indexStyles.indexContainer}>
        <Row>
          <Col lg="6" className={indexStyles.heroImg}>
            <Image
              fileName="hero.jpeg"
              className="rounded-circle"
              style={{ width: "100%" }}
              alt="Hero of the pic"
            />
          </Col>

          <Col lg="6" className={indexStyles.heroBio}>
            <h1>Hello I'm Stelios</h1>
            <p>
              A motivated and reliable Front End Developer who is looking to
              grow within a Tech company.
            </p>
            <p>Need a Developer?</p>
            <Link to="/contact">
              <Button
                variant="outline-primary"
                className={indexStyles.indexCta}
              >
                Contact Me
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Index_Page
