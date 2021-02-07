import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// Components Import
import SEO from "../../components/seo"
import Layout from "../../components/layout/layout"
import Image from "../../components/image"

// React Bootstrap Import
import { Container, Row, Col, Card, Button } from "react-bootstrap"

// Style Import
import blogStyles from "./blog.module.scss"

const Blog_Page = () => {
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
      <SEO title="Blog" />
      <Container fluid className={blogStyles.blogContainer}>
        <h1>Blog Page</h1>

        <Row>
          {data.allMarkdownRemark.edges.map((project, index) => {
            return (
              <Col lg={6} key={index} className={blogStyles.cardContainer}>
                <Card className={blogStyles.cardWrapper}>
                  <Image
                    fileName={project.node.frontmatter.imgName}
                    className={`${blogStyles.cardImg} rounded`}
                    style={{ width: "300px" }}
                  />
                  <Card.Body className={blogStyles.cardBody}>
                    <Card.Title>{project.node.frontmatter.title}</Card.Title>
                    <Card.Text>{project.node.frontmatter.techUsed}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>

        {/* <ul>
          {data.allMarkdownRemark.edges.map((project, index) => {
            return (
              <li key={index}>
                <h1>{project.node.frontmatter.title}</h1>
                <p>{project.node.frontmatter.techUsed}</p>
              </li>
            )
          })}
        </ul> */}
      </Container>
    </Layout>
  )
}

export default Blog_Page
