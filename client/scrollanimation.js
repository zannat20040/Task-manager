import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const scrollanimation = () => {
    useEffect(() => {
        AOS.init();
      }, []);
};

export default scrollanimation;