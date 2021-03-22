import React from "react"

// Components Import
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"

// React Bootstrap Import
import { Form, Button, Container, Row, Col } from "react-bootstrap"

// Style Import
import contactStyles from "./contact.module.scss"

// React Icons Import
import { MdContactMail } from "react-icons/md"
import { RiSendPlaneFill } from "react-icons/ri"
import { GiBroom } from "react-icons/gi"

const Contact_Page = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact Me</h1>
    <Container fluid>
      <Row>
        <Col lg={6}>
          <Form>
            <Row>
              <Col lg={6}>
                <Form.Group controlId="formBasicFirstName">
                  <Form.Control type="text" placeholder="First Name Here" />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group controlId="formBasicLastName">
                  <Form.Control type="text" placeholder="Last Name Here" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email Address Here (example@gmail.com)"
              />
            </Form.Group>

            <Form.Group controlId="formBasicSubject">
              <Form.Control type="text" placeholder="Subject" />
            </Form.Group>

            <Form.Group controlId="formBasicTextBody">
              <Form.Control as="textarea" rows="4" placeholder="Message ..." />
            </Form.Group>

            <div className={contactStyles.ctaContainer}>
              <Button className={contactStyles.ctaSend} type="submit">
                SEND <RiSendPlaneFill />
              </Button>

              <Button className={contactStyles.ctaClear} type="reset">
                CLEAR <GiBroom />
              </Button>
            </div>
          </Form>
        </Col>

        <Col lg={6}>
          <MdContactMail style={{ fontSize: "500px" }} />
        </Col>
      </Row>
    </Container>
    {/* <form method="post" action="#">
      <label>
        Name
        <input type="text" name="name" id="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" id="email" />
      </label>
      <label>
        Subject
        <input type="text" name="subject" id="subject" />
      </label>
      <label>
        Message
        <textarea name="message" id="message" rows="5" />
      </label>
      <button type="submit">Send</button>
      <input type="reset" value="Clear" />
    </form> */}
  </Layout>
)

export default Contact_Page
