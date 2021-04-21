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

// React Icons Import
import { BiMailSend } from "react-icons/bi"
import { TiArrowRightThick } from "react-icons/ti"

const Index_Page = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container fluid className={indexStyles.indexContainer}>
        <Row className={indexStyles.indexRow}>
          <Col lg="6" className={indexStyles.heroCol}>
            <Image
              fileName="hero.jpeg"
              className={`${indexStyles.heroImg} rounded-circle`}
              style={{ width: "400px" }}
              alt="Hero of the pic"
            />
          </Col>

          <Col lg="6" className={indexStyles.heroBio}>
            <h1>Hello, I'm Stelios</h1>
            <p>
              A motivated and reliable Front End Developer who is looking to
              grow within a Tech environment.
            </p>
            {/* <div className={indexStyles.ctaContainer}> */}
            {/* <p>Need a Developer?</p> */}
            <Link to="/contact">
              <Button className={indexStyles.ctaContact}>
                Need a Developer?
                {/* <TiArrowRightThick
                  className="animate__animated animate__lightSpeedInLeft animate__slow animate__infinite"
                  variant="primary"
                  style={{ fontSize: "20px" }}
                /> */}
                <BiMailSend
                  className="animate__animated animate__pulse animate__fast animate__infinite"
                  style={{ fontSize: "30px" }}
                />
              </Button>
            </Link>
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Index_Page
