import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

// Components Import
import SEO from '../../components/seo';
import Layout from '../../components/layout/layout';
// import Image from '../../components/image';

// React Bootstrap Import
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// Style Import
import projectsStyle from './projects.module.scss';

// React Icons Import
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const Projects_Page = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: { notPublished: { eq: false } } }) {
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
				const { title, sortBio, img, cssClass } = project.node.frontmatter;
				const fileImgName = img.name.concat(img.ext);
				const { slug } = project.node.fields;

				return (
					<section key={index} className={projectsStyle[cssClass]}>
						<Container fluid>
							<Row>
								{/* <div className={projectsStyle.browser}>
									<span className={projectsStyle.close}></span>
									<span className={projectsStyle.minimize}></span>
									<span className={projectsStyle.maximize}></span>
								</div> */}

								<div className={projectsStyle.frame}></div>

								<Col className={projectsStyle.bioCol}>
									<div className={projectsStyle.bioContainer}>
										<div>
											<h1>{title}</h1>
											<Link to={`/projects/${slug}`}>
												{/* <Button variant="primary">View {title}</Button> */}
												<IoIosArrowDroprightCircle className="animate__animated animate__tada animate__infinite" variant="primary" />
											</Link>
										</div>
										<p>{sortBio}</p>
									</div>
								</Col>
								<Col className={projectsStyle.imageCol}>
									<div className={projectsStyle.imageContainer}>
										<div className={`${projectsStyle.cardImg} rounded`}></div>
										{/* <Image
                      fileName={fileImgName}
                      className={`${projectsStyle.cardImg} rounded`}
                      style={{ width: "530px" }}
                    /> */}
									</div>
								</Col>
							</Row>
						</Container>
					</section>
					// <Col lg={8} key={index} className={projectsStyle.cardContainer}>
					//   <Card className={projectsStyle.cardWrapper}>
					//     <Image
					//       fileName={fileImgName}
					//       className={`${projectsStyle.cardImg} rounded`}
					//       style={{ width: "300px" }}
					//     />
					//     <Card.Body className={projectsStyle.cardBody}>
					//       <Card.Title>{title}</Card.Title>
					//       <Card.Text>{sortBio}</Card.Text>
					//       <Link to={`/projects/${slug}`}>
					//         <Button variant="primary">View {title}</Button>
					//       </Link>
					//     </Card.Body>
					//   </Card>
					// </Col>
				);
			})}
			{/* <Container fluid className={projectsStyle.projectsContainer}>
        <h1 className={projectsStyle.projectTitle}>My Projects</h1>

        <Row>
          {data.allMarkdownRemark.edges.map((project, index) => {
            const { title, sortBio, img } = project.node.frontmatter
            const fileImgName = img.name.concat(img.ext)
            const { slug } = project.node.fields

            return (
              <Col lg={8} key={index} className={projectsStyle.cardContainer}>
                <Card className={projectsStyle.cardWrapper}>
                  <Image
                    fileName={fileImgName}
                    className={`${projectsStyle.cardImg} rounded`}
                    style={{ width: "300px" }}
                  />
                  <Card.Body className={projectsStyle.cardBody}>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{sortBio}</Card.Text>
                    <Link to={`/projects/${slug}`}>
                      <Button variant="primary">View {title}</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container> */}
		</Layout>
	);
};

export default Projects_Page;
