import React from "react"
import { Progress } from "react-sweet-progress"

// Components Import
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"

// React Bootstrap Import
import { Container, Row, Col } from "react-bootstrap"

// Style Import
import aboutStyles from "./about.module.scss"
import "react-sweet-progress/lib/style.css"

// React Icons Import
import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa"
import { SiBabel, SiWebpack, SiNpm } from "react-icons/si"

const About_Page = () => (
  <Layout>
    <SEO title="About" />
    <Container fluid className={aboutStyles.aboutContainer}>
      <div className={aboutStyles.aboutBio}>
        <h2>About Stelios</h2>
        <p>
          I’m a Front - End Developer with a background in Sound Engineering.
        </p>
        <p>
          When I was working as a Sound Engineer I was curious about how
          software programs work. So I started doing some research and I bumped
          into an enormous amount of courses and information about coding and
          what you can achieve with it.
        </p>
        <p>
          After dabbling with code in my spare time, I realise I was hooked and
          decided to take a BootCamp course in order to learn how to code
          properly. This has exposed me to full-stack technologies culminating
          in several projects.
        </p>
        <p>
          I would like to work closely with an experienced mentor to continue
          building my skills, further grow and develop my love for coding.
          Currently, I am looking for a job opportunity in the field as a Front
          - End Developer that will give me all the opportunities for growth,
          both personally and professionally.
        </p>
      </div>

      <div className={aboutStyles.aboutSkills}>
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
                    symbol: " ",
                    color: "#f06529",
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
                    symbol: " ",
                    color: "#1e90ff",
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
                    symbol: " ",
                    color: "#efd81d",
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
                    symbol: " ",
                    color: "#f9dc3e",
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
                    symbol: " ",
                    color: "#75aecb",
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
                    symbol: " ",
                    color: "#c40b0a",
                  },
                }}
              />
            </div>
          </div>

          <div className={aboutStyles.techIcons}>
            <div className={`${aboutStyles.icHtml5} ${aboutStyles.techIcon}`}>
              <FaHtml5 />
              <Progress
                className={aboutStyles.progressBar}
                percent={80}
                status="active"
                theme={{
                  active: {
                    symbol: " ",
                    color: "#f06529",
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
                    symbol: " ",
                    color: "#1e90ff",
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
                    symbol: " ",
                    color: "#efd81d",
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
                    symbol: " ",
                    color: "#f9dc3e",
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
                    symbol: " ",
                    color: "#75aecb",
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
                    symbol: " ",
                    color: "#c40b0a",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className={aboutStyles.aboutHobbies}></div> */}
    </Container>
  </Layout>
)

export default About_Page
