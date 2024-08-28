import { Link } from 'gatsby';
import React from 'react';

// Component Import
import Image from '../../components/image';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';

// React Bootstrap Import
import { Button, Col, Container, Row } from 'react-bootstrap';

// Style Import
import indexStyles from './index.module.scss';

// React Icons Import
import { BiMailSend } from 'react-icons/bi';

const Index_Page = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<Container fluid className={indexStyles.indexContainer}>
				<Row className={indexStyles.indexRow}>
					<Col lg="6" className={indexStyles.heroCol}>
						<Image
							fileName="sep.jpeg"
							className={`${indexStyles.heroImg} rounded-circle`}
							style={{ width: '370px' }}
							alt="Hero of the pic"
						/>
					</Col>

					<Col lg="6" className={indexStyles.bioCol}>
						<div className={indexStyles.heroBio}>
							<h1>Hello, I'm Stelios</h1>
							<p>
								A motivated and reliable Software Developer seeking to
								work and grow in a tech environment.
							</p>
							<Link to="/contact">
								<Button className={indexStyles.ctaContact}>
									Need a Developer?
									<BiMailSend
										className="animate__animated animate__pulse animate__fast animate__infinite"
										style={{ fontSize: '30px', marginLeft: '5px' }}
									/>
								</Button>
							</Link>
						</div>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
};

export default Index_Page;
