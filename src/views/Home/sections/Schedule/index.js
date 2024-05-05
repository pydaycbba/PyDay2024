import React, { useState } from 'react'
import ScheduleItem from './ScheduleItem';

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
                    type="Apertura"
                    title="Acreditación al evento"
                    name="Organizadores de PyDay"
                    description=""
                />
                <ScheduleItem
                    time="09:10 - 09:50"
                    type="Charla"
                    title="Charla 1"
                    name="Speaker 1"
                    description=""
                />
                <ScheduleItem
                    time="10:10 - 10:50"
                    type="Charla"
                    title="Charla 2"
                    name="Speaker 2"
                    description=""
                />
                <ScheduleItem
                    time="11:00 - 11:40"
                    type="Charla"
                    title="Charla 3"
                    name="Speaker 3"
                    description=""
                />
                <ScheduleItem
                    time="11:50 - 12:30"
                    type="Charla"
                    title="Charla 4"
                    name="Speaker 4"
                    description=""
                />
                <ScheduleItem
                    time="14:10 - 14:50"
                    type="Charla"
                    title="Charla 5"
                    name="Speaker 5"
                    description=""
                />
                <ScheduleItem
                    time="15:00 - 15:40"
                    type="Charla"
                    title="Charla 6"
                    name="Speaker 6"
                    description=""
                />
                <ScheduleItem
                    time="15:50 - 16:30"
                    type="Charla"
                    title="Charla 7"
                    name="Speaker 7"
                    description=""
                />
                <ScheduleItem
                    time="16:40 - 17:20"
                    type="Charla"
                    title="Charla 8"
                    name="Speaker 8"
                    description=""
                />
                <ScheduleItem
                    time="17:15 - 17:30"
                    type="Conclusión"
                    title="Cierre de Evento"
                    name="Organizadores de PyDay"
                    description=""
                />
            </div>
            <div id='segundo' className={activeTab === 'segundo' ? 'tabcontent active' : 'tabcontent'}>
                <ScheduleItem
                    time="10:10 - 11:50"
                    type="Taller"
                    title="Taller 1"
                    name="Workshopper 1"
                    description=""
                />
                <ScheduleItem
                    time="15:00 - 16:40"
                    type="Taller"
                    title="Taller 2"
                    name="Workshopper 2"
                    description=""
                />
            </div>
        </section>
    )
}

export default Schedule;
