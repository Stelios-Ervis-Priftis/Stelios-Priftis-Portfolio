import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

// Components Import
import SEO from '../../components/seo';
import Layout from '../../components/layout/layout';

// React Bootstrap Import
import { Container, Row, Col } from 'react-bootstrap';

// Style Import
import projectsStyle from './projects.module.scss';

// React Icons Import
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const Projects_Page = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { notPublished: { eq: false } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              sortBio
              img {
                name
                ext
              }
              cssClass
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Projects" />
      {data.allMarkdownRemark.edges.map((project, index) => {
        const { title, sortBio, cssClass } = project.node.frontmatter;
        const { slug } = project.node.fields;

        return (
          <section key={index} className={`${projectsStyle[cssClass]} ${projectsStyle.section}`}>
            <Container fluid>
              <Row>
                <div className={projectsStyle.frame}></div>

                <Col className={projectsStyle.bioCol}>
                  <div className={projectsStyle.bioContainer}>
                    <div>
                      <h1>{title}</h1>
                      <Link to={`/projects/${slug}`}>
                        <IoIosArrowDroprightCircle
                          className="animate__animated animate__tada animate__infinite"
                          variant="primary"
                        />
                      </Link>
                    </div>
                    <p>{sortBio}</p>
                  </div>
                </Col>
                <Col className={projectsStyle.imageCol}>
                  <div className={projectsStyle.imageContainer}>
                    <div className={`${projectsStyle.cardImg} rounded`}></div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        );
      })}
    </Layout>
  );
};

export default Projects_Page;
