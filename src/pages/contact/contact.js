import React, { useState } from "react"
import emailjs from "emailjs-com"

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

const Contact_Page = () => {
  const handleSendEmail = e => {
    const resetForm = e.target

    emailjs
      .sendForm(
        "gmail_xj3wxl7",
        "Conform_template_7r86ry9",
        e.target,
        "user_maJb1cUj2C394Kh7Sk8nB"
      )
      .then(
        result => {
          alert(result.text)
          resetForm.reset()
        },
        error => {
          alert(error.text)
          resetForm.reset()
        }
      )

    e.preventDefault()
  }

  return (
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
              onSubmit={handleSendEmail}
            >
              <h1>Contact Me</h1>
              <Form.Group>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  as="textarea"
                  name="message"
                  placeholder="Message ..."
                  rows="4"
                  style={{ resize: "none" }}
                  required
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
    </Layout>
  )
}

export default Contact_Page
