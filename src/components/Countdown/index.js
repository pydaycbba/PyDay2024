import React, { useState, useEffect } from 'react';

import './countdown.css'

const Countdown = ({ targetDate }) => {
  let timerControl = true;
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate) - new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        } else {
          timerControl = false
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearTimeout(timer);
      });
    
      const { days, hours, minutes, seconds } = timeLeft;

    if (timerControl==true) {
      return (
          <section id="div_countdown">        
            <h1>Cuenta Regresiva</h1>
            <div className="countdown-container">
                {days > 0 && <div className="countdown-item">
                    <span className="countdown-number">{days}</span>
                    <span className="countdown-label">Days</span>
                </div>}
                {hours > 0 && <div className="countdown-item">
                    <span className="countdown-number">{hours}</span>
                    <span className="countdown-label">Horas</span>
                </div>}
                <div className="countdown-item">
                    <span className="countdown-number">{minutes}</span>
                    <span className="countdown-label">Minutos</span>
                </div>
                <div className="countdown-item">
                    <span className="countdown-number">{seconds}</span>
                    <span className="countdown-label">Segundos</span>
                </div>
            </div>
          </section>
      )
    } else {
      return (
        <section id="div_countdown">        
            <h1>Cuenta Regresiva</h1>
            <div className="countdown-container">
            <span className="countdown-number">¡Bienvenidos al PyDay!</span>
            </div>
        </section>
      )
    }
}

export default Countdown;