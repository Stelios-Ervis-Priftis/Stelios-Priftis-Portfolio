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
			<section className={aboutStyles.aboutSection} onWheel={(e) => isScrolled(e.deltaY >= 0 ? !isScrolled : !!isScrolled)}>
				<Container fluid className={aboutStyles.aboutContainer}>
					<h1>My Story</h1>
					<div className={aboutStyles.aboutBio}>
						<h2>About Stelios</h2>
						<p>I’m a Front - End Developer with a background in Sound Engineering.</p>
						<p>When I was working as a Sound Engineer I was curious about how software programs work. So I started doing some research and I bumped into an enormous amount of courses and information about coding and what you can achieve with it.</p>
						<p>After dabbling with code in my spare time, I realise I was hooked and decided to take a BootCamp course in order to learn how to code properly. This has exposed me to full-stack technologies culminating in several projects.</p>
						<p>I would like to work closely with an experienced mentor to continue building my skills, further grow and develop my love for coding. Currently, I am looking for a job opportunity in the field as a Front - End Developer that will give me all the opportunities for growth, both personally and professionally.</p>
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
								<Image fileName="windsurfing.jpg" className={`${aboutStyles.windsurfingHero} rounded-circle`} style={{ width: '250px', height: '250px' }} alt="Hero of the pic" />
							</div>
						</Col>

						<Col lg="8">
							<div className={aboutStyles.windsurfingBio}>
								<h1>Wind Surfing</h1>
								<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit voluptate illo, impedit quam ipsum ex perferendis vel earum dolore aut deleniti possimus, sapiente natus itaque, nobis aliquid neque velit fugit.</p>
							</div>
						</Col>
					</Row>

					<Row className={aboutStyles.snowboarderRow}>
						<Col lg="8">
							<div className={aboutStyles.snowboarderBio}>
								<h1>Snow Boarding</h1>
								<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit voluptate illo, impedit quam ipsum ex perferendis vel earum dolore aut deleniti possimus, sapiente natus itaque, nobis aliquid neque velit fugit.</p>
							</div>
						</Col>

						<Col lg="4">
							<div className={aboutStyles.snowboarderContainer}>
								<Image fileName="snowboarding.jpg" className={`${aboutStyles.snowboarderHero} rounded-circle`} style={{ width: '250px', height: '250px' }} alt="Hero of the pic" />
							</div>
						</Col>
					</Row>

					<Row className={aboutStyles.bartendingRow}>
						<Col lg="4">
							<div className={aboutStyles.bartendingContainer}>
								<Image fileName="bartending.jpg" className={`${aboutStyles.bartendingHero} rounded-circle`} style={{ width: '250px', height: '250px' }} alt="Hero of the pic" />
							</div>
						</Col>

						<Col lg="8">
							<div className={aboutStyles.bartendingBio}>
								<h1>Bartending</h1>
								<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit voluptate illo, impedit quam ipsum ex perferendis vel earum dolore aut deleniti possimus, sapiente natus itaque, nobis aliquid neque velit fugit.</p>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Layout>
	);
};

export default About_Page;

{
	/* <div className={aboutStyles.aboutSkills}>
						<h2>Front - End Skill Set</h2>
						<h3>Languages I Speak:</h3>
						<div className={aboutStyles.skillIcons}>
							<div className={aboutStyles.techIcons}>
								<div className={`${aboutStyles.icHtml5} ${aboutStyles.techIcon}`}>
									<FaHtml5 />
									<Progress
										className={aboutStyles.progressBar}
										percent={80}
										status="active"
										theme={{
											active: {
												symbol: ' ',
												color: '#f06529',
											},
										}}
									/>
								</div>
								<div className={`${aboutStyles.icCss} ${aboutStyles.techIcon}`}>
									<FaCss3Alt />
									<Progress
										className={aboutStyles.progressBar}
										percent={67}
										status="active"
										theme={{
											active: {
												symbol: ' ',
												color: '#1e90ff',
											},
										}}
									/>
								</div>
								<div className={`${aboutStyles.icJs} ${aboutStyles.techIcon}`}>
									<FaJsSquare />
									<Progress
										className={aboutStyles.progressBar}
										percent={75}
										status="active"
										theme={{
											active: {
												symbol: ' ',
												color: '#efd81d',
											},
										}}
									/>
								</div>
								<div className={`${aboutStyles.icBabel} ${aboutStyles.techIcon}`}>
									<SiBabel />
									<Progress
										className={aboutStyles.progressBar}
										percent={40}
										status="active"
										theme={{
											active: {
												symbol: ' ',
												color: '#f9dc3e',
											},
										}}
									/>
								</div>
								<div className={`${aboutStyles.icWebpack} ${aboutStyles.techIcon}`}>
									<SiWebpack />
									<Progress
										className={aboutStyles.progressBar}
										percent={50}
										status="active"
										theme={{
											active: {
												symbol: ' ',
												color: '#75aecb',
											},
										}}
									/>
								</div>
								<div className={`${aboutStyles.icNpm} ${aboutStyles.techIcon}`}>
									<SiNpm />
									<Progress
										className={aboutStyles.progressBar}
										percent={90}
										status="active"
										theme={{
											active: {
												symbol: ' ',
												color: '#c40b0a',
											},
										}}
									/>
								</div>
							</div>
						</div>
					</div> */
}
