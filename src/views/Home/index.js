import React from 'react';
import Navbar from '../../components/Navbar';
import Images from '../../assets/images';
import Footer from '../../components/footer'
import CodeOfConduct from './sections/CodeOfConduct';
import Contact from './sections/Contact';
import Schedule from './sections/Schedule';


const Home = () => {
  return (
    <div>
      <div className='mainContainer'>
        <Navbar />
        <section id='Home'>
          <div className='contentLogo'>
            <img className="logo_inicio" src={Images.pydayCochabamba} alt='pyday logo'/>
            <img className="CommingSoon" src={Images.comingSoon} alt="CommingSoon" />
            <p className="button">15 de Junio</p>
          </div>
          <div className='contentBody'>
            <p>Muy pronto tendremos nuestro primer PyDay en Cochabamba</p>
            <p>Un evento donde se reunirá la comunidad para aprender y celebrar un día completo en torno a Python, uno de los lenguajes de programación másversátil y usado en la industria, ¡disfrutando de diferentes ponencias y talleres!</p>
          </div>
        </section>
      </div>
      <Schedule />
      <CodeOfConduct />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home;
