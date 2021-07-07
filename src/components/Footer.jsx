import React from 'react';
import '../assets/styles/components/Footer.scss';

const Footer = props => {
    const { location } = props;
    let className;
    
    if(location.key || location.pathname === '/') {
        className = 'footer'
    } else {
        className = 'footer notFound';
    }
    
    return(
        <footer className={`${className}`}>
            <a href="">Términos de uso</a>
            <a href="">Declaración de privacidad</a>
            <a href="">Centro de ayuda</a>
        </footer>
    )
}

export default Footer;