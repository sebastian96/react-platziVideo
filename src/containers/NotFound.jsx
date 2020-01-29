import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/components/notFound.scss';

const NotFound = () => (
    <section className="pageError">
        <h2 className="animated bounce pageError__title">404</h2>
        <p className="pageError__text">Página no encontrada.</p>
    </section>
);

export default NotFound;