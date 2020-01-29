import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/components/Register.scss';

const Register = () => (
    <div className="containerLogin">
        <Header />
        <main className="register">
            <section className="register__container">
                <h2 className="register__title">Regístrate</h2>
                <form className="register__form">
                    <input type="text" className="register__form--input" placeholder="Nombre" />
                    <input type="text" className="register__form--input" placeholder="Correo" />
                    <input type="password" className="register__form--input" placeholder="Contraseña" />
                    <button className="register__form--btn">Registrarme</button>
                </form>
                <div className="register__back">
                    <a href="">Iniciar sesión</a>
                </div>
            </section>
        </main>
        <Footer />
    </div>
);

export default Register;