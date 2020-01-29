import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/components/Login.scss';
import google from '../assets/static/google.png';
import twitter from '../assets/static/twitter.png';

const Login = () => (
    <div className="containerLogin">
        <Header />
        <main className="login">
            <section className="login__container">
                <h2 className="login__title">Inicia sesión</h2>
                <form className="login__form">
                    <input type="text" className="login__form--input" placeholder="Correo" />
                    <input type="password" className="login__form--input" placeholder="Contraseña" />
                    <button className="login__form--btn"> Iniciar sesión </button>
                </form>
                <div className="login__actions">
                    <label>
                        <input type="checkbox" className="login__actions--checkbox" />
                        Recuérdame
                    </label>
                    <a href="">Olvidé mi contraseña</a>
                </div>
                <div className="login__socialMedia">
                    <a href="">
                        <img src={google} alt="Logo de Google"/>
                        Iniciar sesíon con Google
                    </a>
                    <a href="">
                        <img src={twitter} alt="Logo de Twitter" />
                        Iniciar sesíon con Twitter
                    </a>
                </div>
                <div className="login__register">
                    <p>¿No tienes ninguna cuenta? <a href="">Regístrate</a></p>
                </div>
            </section>
        </main>
        <Footer />
    </div>
);

export default Login;