import React from "react"

// Components Import
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"

// React Bootstrap Import
import { Form, Button, Container, Row, Col } from "react-bootstrap"

// Style Import
import contactStyles from "./contact.module.scss"

// React Icons Import
import { ImMail4 } from "react-icons/im"
import { RiSendPlaneFill } from "react-icons/ri"
import { GiBroom } from "react-icons/gi"

const Contact_Page = () => (
  <Layout>
    <SEO title="Contact" />
    <Container fluid className={contactStyles.contactContainer}>
      <Row className={contactStyles.contactRow}>
        <Col lg={6} className={contactStyles.iconContainer}>
          <ImMail4 />
        </Col>

        <Col lg={6}>
          <Form
            className={contactStyles.formContainer}
            name="contact"
            action="POST"
            data-netlify="true"
          >
            <h1>Contact Me</h1>
            <Row>
              <Col lg={6}>
                <Form.Group controlId="formBasicFirstName">
                  <Form.Control
                    type="text"
                    name="first-name"
                    required
                    placeholder="First Name"
                  />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group controlId="formBasicLastName">
                  <Form.Control
                    type="text"
                    name="last-name"
                    required
                    placeholder="Last Name"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                required
                placeholder="Email Address"
              />
            </Form.Group>

            <Form.Group controlId="formBasicSubject">
              <Form.Control
                type="text"
                name="subject"
                required
                placeholder="Subject"
              />
            </Form.Group>

            <Form.Group controlId="formBasicTextBody">
              <Form.Control
                as="textarea"
                name="text-area"
                required
                rows="4"
                style={{ resize: "none" }}
                placeholder="Message ..."
              />
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
