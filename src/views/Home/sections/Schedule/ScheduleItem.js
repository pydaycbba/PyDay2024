import React, { useState } from 'react';
import Icons from '../../../../assets/icons';

const ScheduleItem = ({ time, image, type, title, name, description }) => {
    const [expanded, setExpanded] = useState(false);

    const handleItemClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='schedule-item'>
            <div className='schedule-item-1' onClick={handleItemClick}>
                <p>{time}</p>
                <img className='item-image' src={image} alt='Foto de ponente'/>
                <div className='item-data'>
                    <p id='type' className={`item-data ${type}`}>{type}</p>
                    <p className='item-data-title'>{title}</p>
                    <p className='item-data-name'>{name}</p>
                </div>
                <img className={`icon-arrow ${expanded ? 'rotated' : ''}`} src={Icons.iconYellowArrow} alt='Arrow icon'/>
            </div>
            <div className={`schedule-item-2 ${expanded ? 'expanded' : ''}`}>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ScheduleItem;