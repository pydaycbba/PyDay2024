import React from 'react';

const ScheduleItem = ({ time, type, title, name, description }) => {
    return (
        <div className='schedule-item'>
            <p>{time}</p>
            <div className='item-data'>
                <p id='type' className={`item-data ${type}`}>{type}</p>
                <p className='item-data-title'>{title}</p>
                <p className='item-data-name'>{name}</p>
            </div>
        </div>
    );
    };

export default ScheduleItem;