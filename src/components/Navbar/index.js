import React, { useState, useEffect } from 'react';
import Images from '../../assets/images'
import './navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && showMenu) {
        setShowMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [showMenu]);

  document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[id]');
    /* const navLinks = document.querySelectorAll('.navbar li a'); */
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const navActive = document.querySelector(`.navbar li a[href="#${id}"]`);
            
            if (navActive) {
                if (entry.isIntersecting) {
                    navActive.classList.add('active');
                } else {
                    navActive.classList.remove('active');
                }
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#home">
          <img className='logoHeader' alt="PyDay Logo" src={Images.pydayCbbaOriginal} />
        </a>
        <button className="menu-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <ul className={`navbar-menu ${showMenu ? 'show' : ''}`}>
        <li id='home'><a href="#Home" onClick={closeMenu}>Pyday</a></li>
        <li id='schedule'><a href="#Schedule" onClick={closeMenu}>Cronograma</a></li>
        <li id='coc'><a href="#COC" onClick={closeMenu}>COC</a></li>
        <li id='contact'><a href="#Contact" onClick={closeMenu}>Contactos</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
