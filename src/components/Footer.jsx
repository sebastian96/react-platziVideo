import React from 'react';
import '../assets/styles/components/Footer.scss';

const Footer = props => {
    const { location } = props;
    return(
        <footer className={`${location.key ? 'footer' : 'footer notFound'}`}>
            <a href="">Términos de uso</a>
            <a href="">Declaración de privacidad</a>
            <a href="">Centro de ayuda</a>
        </footer>
    )
}

export default Footer;