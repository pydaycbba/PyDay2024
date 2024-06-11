import React, { useState } from 'react'
import ScheduleItem from './ScheduleItem';
import Images from '../../../../assets/images';
import './schedule.css';

const Schedule = () => {
    
    const [activeTab, setActiveTab] = useState('primero');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <section className='div_schedule' id='Schedule'>
            <h1>Cronograma</h1>
            <div className='tab'>
                <p className={activeTab === 'primero' ? 'tablinks active' : 'tablinks'}
        onClick={() => handleTabClick('primero')}>Auditorio</p>
                <p className={activeTab === 'segundo' ? 'tablinks active' : 'tablinks'}
        onClick={() => handleTabClick('segundo')}>Laboratorio</p>
            </div>
            <div id='primero' className={activeTab === 'primero' ? 'tabcontent active' : 'tabcontent'}>
                <ScheduleItem
                    time="08:30 - 09:00"
                    image={Images.schedulePyDay}
                    type="Apertura"
                    title="Acreditación al evento"
                    name="Organizadores de PyDay"
                    description="¡Iniciamos el primer PyDay en Cochabamba agradeciendo a todos los participantes, speakers, workshoppers y sponsors del evento!"
                />
                <ScheduleItem
                    time="09:10 - 09:50"
                    image={Images.speakerJacquelineSusan}
                    type="Charla"
                    title="Chatbots que conversan: Crea chatbots inteligentes con Rasa"
                    name="Jacqueline Susan Mejía"
                    description="En la era digital, los chatbots se han vuelto esenciales para interactuar con marcas y servicios, siendo Rasa una plataforma destacada para su desarrollo. Esta presentación cubrirá desde los fundamentos de Rasa, incluyendo su núcleo, el dominio y el generador de lenguaje natural, hasta el proceso de construcción de un chatbot, abordando la definición de intents, entrenamiento de modelos y generación de respuestas mediante técnicas de procesamiento de lenguaje natural."
                />
                <ScheduleItem
                    time="10:10 - 10:50"
                    image={Images.speakerReinaldoQuispe}
                    type="Charla"
                    title="Programación funcional con Python"
                    name="Reinaldo Quispe Medrano"
                    description="El objetivo de esta charla es introducir el paradigma de programación funcional utilizando Python y mostrar cómo este enfoque mejora la calidad del código. Se destacarán casos de uso en el análisis exploratorio de datos para ilustrar su aplicación práctica."
                />
                <ScheduleItem
                    time="11:00 - 11:40"
                    image={Images.speakerSergioValenzuela}
                    type="Charla"
                    title="Doctor Tomatto: Detección u Clasificación de Enfermedades en el Tomate mediante Deep Learning y Computer Vision"
                    name="Sergio Hernán Valenzuela Cámara"
                    description="Detección y Clasificación de Enfermedades mediante Deep Learning y Computer Visión."
                />
                <ScheduleItem
                    time="11:50 - 12:30"
                    image={Images.speakerAndresGutierrez}
                    type="Charla"
                    title="Python, más allá del procesamiento de datos y la IA (ERP's con Python)"
                    name="Andres Gutierrez Panoso"
                    description="Python tiene un rol importante en software empresarial, como backend soporta infrastructuras inmensas y en esta charla aprenderemos cómo ganar dinero con Python."
                />
                <ScheduleItem
                    time="14:10 - 14:50"
                    image={Images.speakerRudyManzaneda}
                    type="Charla"
                    title="Streamlit: Creando Aplicaciones Web Interactivas para Ciencia de Datos con Python"
                    name="Rudy Luis Manzaneda Veizaga"
                    description="Se explicará cómo Streamlit simplifica el proceso de desarrollo de aplicaciones web interactivas para ciencia de datos con Python. En esta charla, se explicarán las características principales de Streamlit y cómo se puede utilizar esta herramienta para crear visualizaciones dinámicas, paneles interactivos y prototipos rápidos. Aprenderás sobre la facilidad de uso de Streamlit, su integración con bibliotecas de visualización de datos y su aplicación en casos reales."
                />
                <ScheduleItem
                    time="15:00 - 15:40"
                    image={Images.speakerKevinArroyo}
                    type="Charla"
                    title="Impulsando la Innovación: Desarrollo de Aplicaciones Multiplataforma con Python y Flet"
                    name="Kevin Omar Arroyo Montaño"
                    description="Exploraremos cómo Python y Flet pueden combinarse para impulsar la innovación en el desarrollo de aplicaciones multiplataforma. Desde la creación de interfaces de usuario fluidas y atractivas hasta la integración de funcionalidades avanzadas, este enfoque ofrece un camino emocionante para construir aplicaciones que funcionen sin problemas en una variedad de dispositivos."
                />
                <ScheduleItem
                    time="15:50 - 16:30"
                    image={Images.speakerPaolaMedrano}
                    type="Charla"
                    title="¿Quién dijo que Python era solo para desarrolladores? Explorando su potencial en el mundo del hacking y la ciberseguridad"
                    name="Paola Cinthia Medrano Pizarrozo"
                    description="Exploraremos el potencial de Python en hacking y ciberseguridad. Descubriremos cómo este lenguaje va más allá del desarrollo convencional para proteger y atacar en el mundo digital y volverlo tu mejor aliado en defensa de ciberataques."
                />
                <ScheduleItem
                    time="16:40 - 17:20"
                    image={Images.speakerSamuelRojas}
                    type="Charla"
                    title="Desarrollo Web con Python: Explorando Reflex"
                    name="Samuel Isaias Rojas Condarco"
                    description="En esta charla veremos el mundo de Reflex, un marco de trabajo que te permite hacer webs bonitas y divertidas, solo usando Python. No necesitas aprender un montón de cosas nuevas, y en pocos minutos podrás hacer y compartir tu primera app web. Desde pequeñas apps de ciencia de datos hasta sitios webs con varias páginas, Reflex lo facilita."
                />
                <ScheduleItem
                    time="17:15 - 17:30"
                    image={Images.schedulePyDay}
                    type="Conclusión"
                    title="Cierre de Evento"
                    name="Organizadores de PyDay"
                    description="¡Daremos fin a una excelente y diveretida jornada de aprendizaje para todos los pythonistas en el evento. Agradeceremos a todos los miembros y sponsors que hicieron posible el evento y nos tomaremos fotos para el recuerdo!"
                />
            </div>
            <div id='segundo' className={activeTab === 'segundo' ? 'tabcontent active' : 'tabcontent'}>
                <ScheduleItem
                    time="11:00 - 12:30"
                    image={Images.talleristaItatiTorrez}
                    type="Taller"
                    title="Pacman.py"
                    name="Itati Carla Torrez Mendez"
                    description="Vamos a utilizar mBlock un software libre, que incluye el lenguaje python en su desarrollo.
                    Programaremos desde 0 el juego de pacman, tanto en python como en bloques. Un taller que va dirigido a aquellos que le quieren dar vida a su codigo python mediante un juego."
                />
                <ScheduleItem
                    time="15:00 - 16:40"
                    image={Images.talleristaAnelise}
                    type="Taller"
                    title="Construyendo software robusto, Explorando patrones de diseño en Python"
                    name="Anaelise Huaniri Romero"
                    description="En este taller, exploraremos en profundidad cómo los patrones de diseño pueden transformar radicalmente la calidad y la eficacia del software."
                />
            </div>
        </section>
    )
}

export default Schedule;
