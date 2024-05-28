import React from 'react';
import Navbar from '../../components/Navbar';
import Images from '../../assets/images';
import Footer from '../../components/footer'
import CodeOfConduct from './sections/CodeOfConduct';
import Schedule from './sections/Schedule';
import Communities from './sections/Communities';
import Campus from './sections/Campus';

import Icons from '../../assets/icons';

	const Home = () => {
	return (
		<div>
		<div className='mainContainer'>
			<Navbar />
			<section id='Home'>
				<div className='Content'>
					<div className='contentLogo'>
						<img className="logo_inicio" src={Images.pydayCochabamba} alt='pyday logo'/>
						<div className='contentDescription'>
							<a>
								<img src={Icons.logoCalendar} alt="" />
								<span>15 de Junio</span>
							</a>
							<a>
								<img src={Icons.logoClock} alt="" />
								<span>09:00 - 17:30</span>
							</a>
							<a>
								<img src={Icons.logoLocations} alt="" />
								<span>UCATEC</span>
							</a>
						</div>
					</div>
					<div className='contentBody'>
						<p>¡Únete al PyDay Cochabamba 2024!</p>
						<p>Únete a nosotros para un día lleno de aprendizaje, innovación y conexión. ¡Regístrate ahora y sé parte de esta experiencia única! ¡No pierdas la oportunidad de impulsar tu carrera en tecnología!</p>
						<a href="https://lu.ma/pydaycbba" target="_blank">
							<span>Regístrate</span>
						</a>
					</div>
				</div>
			</section>
		</div>
		<Schedule />
		<Campus />
		<CodeOfConduct />
		<Communities />
		<Footer />
		</div>
	)
	}


export default Home;

