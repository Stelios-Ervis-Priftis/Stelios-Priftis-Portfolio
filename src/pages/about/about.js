import React from 'react';

// Components Import
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import Image from '../../components/image';

// React Bootstrap Import
import { Container } from 'react-bootstrap';

// Style Import
import aboutStyles from './about.module.scss';
import 'react-sweet-progress/lib/style.css';

const About_Page = () => {
  const imageSize = {
    width: '120px',
    height: '120px',
  };

  return (
    <Layout>
      <SEO title="About" />
      <Container className={aboutStyles.aboutWrapper}>
        <Container className={aboutStyles.aboutSectionsContainer}>
          <Container className={aboutStyles.aboutContainer}>
            <h4>About me and my hobbies</h4>

            <p> I’m a Software Engineer with a background in Sound Engineering.</p>
            <p>
              My curiosity about software programs began while I was working as a Sound Engineer. Fascinated
              by how these programs function, I started exploring the world of coding. This journey led me to
              discover a wealth of courses and information about programming and its vast potential.
            </p>
            <p>
              After experimenting with code in my spare time, I realized I was hooked. To further my knowledge
              and skills, I enrolled in a BootCamp course, which provided comprehensive training in full-stack
              technologies. This experience allowed me to work on several projects, expanding my passion for
              software development.
            </p>
            <p>
              Now, as a dedicated Software Engineer, I bring a unique perspective from my sound engineering
              background, combining creativity and technical expertise to deliver innovative solutions. I'm
              proficient in technologies such as JavaScript and frameworks like React. My experience showcases
              my ability to develop and deploy robust applications.
            </p>
            <p>
              I am excited to continue growing in this field, take advantage of my problem-solving skills,
              creativity, and collaborative nature to contribute to meaningful projects. My career aspiration
              is to become an expert in software engineering, continually learning and adapting to new
              technologies to create meaningful and innovative solutions.
            </p>
          </Container>

          <Container className={aboutStyles.hobbiesContainer}>
            <div className={aboutStyles.windsurfingContainer}>
              <Image
                fileName="windsurfing.jpg"
                className={`${aboutStyles.windsurfingHero} rounded-circle`}
                style={imageSize}
                alt="Hero of the pic"
              />

              <div className={aboutStyles.windsurfingBio}>
                <h4>Wind Surfing</h4>
                <p>
                  Windsurfing is my favorite summer activity. The joy of riding on the water, driven by the
                  wind, is unlike anything else. It’s about learning to control the elements, challenging
                  myself, and enjoying nature.
                </p>
              </div>
            </div>

            <div className={aboutStyles.snowboarderContainer}>
              <Image
                fileName="snowboarding.jpg"
                className={`${aboutStyles.snowboarderHero} rounded-circle`}
                style={imageSize}
                alt="Hero of the pic"
              />

              <div className={aboutStyles.snowboarderBio}>
                <h4>Snow Boarding</h4>
                <p>
                  Snowboarding is my winter passion. The joy of sliding down fresh slopes in a snowy landscape
                  is unmatched. It's a sport that blends excitement and creativity.
                </p>
              </div>
            </div>

            <div className={aboutStyles.bartendingContainer}>
              <Image
                fileName="bartending.jpg"
                className={`${aboutStyles.bartendingHero} rounded-circle`}
                style={imageSize}
                alt="Hero of the pic"
              />

              <div className={aboutStyles.bartendingBio}>
                <h4>Mixology</h4>
                <p>
                  Mixology is my exciting hobby, a mix of art and flavors. Creating cocktails is like making a
                  symphony, with each ingredient adding to the taste. It's a creative activity that lets me
                  experiment, innovate, and surprise, whether making classic drinks or inventing new ones.
                </p>
              </div>
            </div>
          </Container>
        </Container>
      </Container>
    </Layout>
  );
};

export default About_Page;
