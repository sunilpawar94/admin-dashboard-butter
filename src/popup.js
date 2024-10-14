// src/PopupComponent.js
import React, { useEffect } from 'react';
import './home.css';  // Don't forget to include the CSS file for styling

const PopupComponent = () => {
  
  useEffect(() => {
    const openPopupBtn = document.getElementById('logo');
    const popup = document.getElementById('homelink');
    const closeBtn = document.getElementById('logo');

    openPopupBtn.addEventListener('click', () => {
      popup.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
      if (event.target === popup) {
        popup.style.display = 'none';
      }
    });

    return () => {
      openPopupBtn.removeEventListener('click', () => {});
      closeBtn.removeEventListener('click', () => {});
      window.removeEventListener('click', () => {});
    };
  }, []);

  
};

export default PopupComponent;