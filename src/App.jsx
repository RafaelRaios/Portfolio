import Navbar from './components/navbar'
import Home from './components/home'
import Feitos from './components/feitos'
import './App.css'
import Particles from 'react-particles'
import particles_config from "./utils/particles.config"
import { useCallback } from 'react'
import { loadFull } from 'tsparticles'
import Sobre from './components/sobre'
import SocialLinks from './components/SocialLinks'
import Contact from './components/contact'
import Experience from './components/experience'

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Particles
        className="z-[-1] fixed"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particles_config}
      />

      <div>
      
        <Navbar />
        <Home />
        <Sobre/>
        <Feitos/>
        <Experience />
        <Contact />
        <SocialLinks />
      </div>
    </>
  )
}


export default App
