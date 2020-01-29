import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';

const Register = () => (
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
                <Link to="/login">
                    Iniciar sesión
                </Link>
            </div>
        </section>
    </main>
);

export default Register;