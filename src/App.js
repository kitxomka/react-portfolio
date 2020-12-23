import React from 'react'
import { Parallax } from 'react-parallax'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import Container from 'react-bootstrap/Container'
import Particles from 'react-particles-js'

// components
import MyNavbar from './components/my-navbar/my-navbar.component'
import MyCarousel from './components/my-carousel/my-carousel.component'
import TitleMessage from './components/title-message/title-message.component'
import About from './pages/about/about.component'
import Skills from './pages/skills/skills.component'
// import Experience from './pages/experience/experience.component'
import ProjectsTimeline from './components/projects-timeline/projects-timeline.component'
import Contact from './pages/contact/contact.component'
import Footer from './components/footer/footer.component'
import { particlesOptions } from './particlesOptions'

import './App.css'


const App = () => {

  return (
    <div className="App" style={{ position: "relative" }}>
      <MyCarousel />
      <TitleMessage />
      <MyNavbar />
      <Particles
        className="particles particles-box"
        params={particlesOptions}
      /> 

      {/* About Section */}
      <div>
        <Parallax className="background" blur={{ min: -30, max: 30 }} strength={-200}>
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
    
      {/* Skills Section */}
      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}><hr />
            <Skills />
          </Slide>
        </Container>
      </div>

      {/* Experience Section
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}><hr />
            <Experience />
          </Fade>
        </Container>
      </div> */}

      {/* Projects Section */}
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}><hr />
            <ProjectsTimeline />
          </Fade>
        </Container>
      </div>

    {/* Contact Section */}
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}><hr />
            <Contact />
          </Fade>
        </Container>
        <hr/>
        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  )
}
    

export default App;
