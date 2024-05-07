import React from 'react';

const ScheduleItem = ({ time, image, type, title, name, description }) => {
    return (
        <div className='schedule-item'>
            <div className='schedule-item-1'>
                <p>{time}</p>
                <img className='item-image' src={image} alt='Foto de ponente'/>
                <div className='item-data'>
                    <p id='type' className={`item-data ${type}`}>{type}</p>
                    <p className='item-data-title'>{title}</p>
                    <p className='item-data-name'>{name}</p>
                </div>
            </div>
            <div className='schedule-item-2'>
                <p>{description}</p>
            </div>
        </div>
    );
    };

export default ScheduleItem;