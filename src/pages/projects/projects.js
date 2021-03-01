import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// Components Import
import SEO from "../../components/seo"
import Layout from "../../components/layout/layout"
import Image from "../../components/image"

// React Bootstrap Import
import { Container, Row, Col, Card, Button } from "react-bootstrap"

// Style Import
import projectsStyle from "./projects.module.scss"

const Projects_Page = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              techUsed
              imgName
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Projects" />
      <Container fluid className={projectsStyle.projectsContainer}>
        <h1 className={projectsStyle.projectTitle}>Projects Page</h1>

        <Row>
          {data.allMarkdownRemark.edges.map((project, index) => {
            const { title, techUsed, imgName } = project.node.frontmatter
            // console.log(project.node.frontmatter)
            return (
              <Col lg={6} key={index} className={projectsStyle.cardContainer}>
                <Card className={projectsStyle.cardWrapper}>
                  <Image
                    fileName={imgName}
                    className={`${projectsStyle.cardImg} rounded`}
                    style={{ width: "300px" }}
                  />
                  <Card.Body className={projectsStyle.cardBody}>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{techUsed}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </Layout>
  )
}

export default Projects_Page
