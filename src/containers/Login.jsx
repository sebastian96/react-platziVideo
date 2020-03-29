import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import Header from '../components/Header';
import google from '../assets/static/google.png';
import twitter from '../assets/static/twitter.png';
import '../assets/styles/components/Login.scss';

const Login = props => {
    const [form, setValues] = useState({
        email: ''
    });

    const handleInput = e => {
        setValues({
            ...form,
            [e.target.name]: event.target.value
        })
    }

    const hadleSubmit = e => {
        e.preventDefault();
        props.loginRequest(form);
        props.history.push('/');
    }

    return (
        <main className="login">
            <section className="login__container">
                <h2 className="login__title">Inicia sesión</h2>
                <form className="login__form" onSubmit={hadleSubmit}>
                    <input 
                        name="email"
                        type="text" 
                        className="login__form--input" 
                        placeholder="Correo" 
                        onChange={handleInput}
                    />
                    <input 
                        name="password"
                        type="password" 
                        className="login__form--input" 
                        placeholder="Contraseña" 
                        onChange={handleInput}
                    />
                    <button type="submit" className="login__form--btn"> Iniciar sesión </button>
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
                    <p>¿No tienes ninguna cuenta?</p>
                    <Link to="/register">
                        Regístrate
                    </Link>
                </div>
            </section>
        </main>
    );
}

const mapDispatchToProps = {
    loginRequest
};

export default connect(null, mapDispatchToProps)(Login);