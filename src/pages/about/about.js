import React, { useState } from 'react';
import { Progress } from 'react-sweet-progress';

// Components Import
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import Image from '../../components/image';

// React Bootstrap Import
import { Container, Row, Col } from 'react-bootstrap';

// Style Import
import aboutStyles from './about.module.scss';
import 'react-sweet-progress/lib/style.css';

// React Icons Import
import { FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiBabel, SiWebpack, SiNpm } from 'react-icons/si';

const About_Page = () => {
	const [scroll, isScrolled] = useState(true);

	return (
		<Layout>
			<SEO title="About" />
			<section
				className={aboutStyles.aboutSection}
				onWheel={(e) => isScrolled(e.deltaY >= 0 ? !isScrolled : !!isScrolled)}>
				<Container fluid className={aboutStyles.aboutContainer}>
					<h1>My Story</h1>
					<div className={aboutStyles.aboutBio}>
						<h2>About Stelios</h2>
						<p>I’m a Front - End Developer with a background in Sound Engineering.</p>
						<p>
							When I was working as a Sound Engineer I was curious about how software programs work. So I started
							doing some research and I bumped into an enormous amount of courses and information about coding
							and what you can achieve with it.
						</p>
						<p>
							After dabbling with code in my spare time, I realise I was hooked and decided to take a BootCamp
							course in order to learn how to code properly. This has exposed me to full-stack technologies
							culminating in several projects.
						</p>
						<p>
							I would like to work closely with an experienced mentor to continue building my skills, further
							grow and develop my love for coding. Currently, I am looking for a job opportunity in the field as
							a Front - End Developer that will give me all the opportunities for growth, both personally and
							professionally.
						</p>
					</div>

					<div className={`${aboutStyles.scrollDown}`}>
						<span className={scroll ? aboutStyles.visible : aboutStyles.invisible}></span>
					</div>
				</Container>
			</section>

			<section className={aboutStyles.hobbiesSection}>
				<Container fluid className={aboutStyles.hobbiesContainer}>
					<h1>My Hobbies</h1>
					<Row className={aboutStyles.windsurfingRow}>
						<Col lg="4">
							<div className={aboutStyles.windsurfingContainer}>
								<Image
									fileName="windsurfing.jpg"
									className={`${aboutStyles.windsurfingHero} rounded-circle`}
									style={{
										width: '250px',
										height: '250px',
									}}
									alt="Hero of the pic"
								/>
							</div>
						</Col>

						<Col lg="8">
							<div className={aboutStyles.windsurfingBio}>
								<h1>Wind Surfing</h1>
								<p>
									Windsurfing is my ultimate summer passion. The rush of gliding on water, powered by the wind,
									is an exhilarating experience like no other. It's a constant pursuit of mastering the
									elements, pushing boundaries, and embracing the beauty of nature. Windsurfing isn't just a
									hobby; it's a way of life that fuels my spirit and sense of adventure.
								</p>
							</div>
						</Col>
					</Row>

					<Row className={aboutStyles.snowboarderRow}>
						<Col lg="8">
							<div className={aboutStyles.snowboarderBio}>
								<h1>Snow Boarding</h1>
								<p>
									Snowboarding is my winter passion. The sensation of carving down pristine slopes, surrounded
									by a winter wonderland, is pure euphoria. It's a sport that combines adrenaline and artistry,
									where each ride becomes a canvas for self-expression. Snowboarding it's a lifelong love
									affair with the mountains and the thrill of defying gravity on snow.
								</p>
							</div>
						</Col>

						<Col lg="4">
							<div className={aboutStyles.snowboarderContainer}>
								<Image
									fileName="snowboarding.jpg"
									className={`${aboutStyles.snowboarderHero} rounded-circle`}
									style={{
										width: '250px',
										height: '250px',
									}}
									alt="Hero of the pic"
								/>
							</div>
						</Col>
					</Row>

					<Row className={aboutStyles.bartendingRow}>
						<Col lg="4">
							<div className={aboutStyles.bartendingContainer}>
								<Image
									fileName="bartending.jpg"
									className={`${aboutStyles.bartendingHero} rounded-circle`}
									style={{
										width: '250px',
										height: '250px',
									}}
									alt="Hero of the pic"
								/>
							</div>
						</Col>

						<Col lg="8">
							<div className={aboutStyles.bartendingBio}>
								<h1>Mixology</h1>
								<p>
									Mixology is my enthralling hobby, a delightful blend of art and flavours. Crafting exquisite
									cocktails is like composing a symphony of flavors, with each ingredient playing a unique role
									in the palate's symphony. It's a creative pursuit that allows me to experiment, innovate, and
									surprise, whether I'm concocting classic cocktails or inventing my own signature libations.
									Mixology it's a captivating journey through the world of spirits and mixers, where every
									drink tells a story of taste and craftsmanship.
								</p>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Layout>
	);
};

export default About_Page;
