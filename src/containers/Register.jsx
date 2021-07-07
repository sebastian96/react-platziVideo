import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../actions';
import Header from '../components/Header';
import '../assets/styles/components/Register.scss';

const Register = props => {
    const [form, setValues] = useState({
        email: '',
        name: '',
        password: ''
    })
    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = event => {
        event.preventDefault();
        props.registerRequest(form);
        props.history.push('/');
    }
    return(
        <main className="register">
            <section className="register__container">
                <h2 className="register__title">Regístrate</h2>
                <form className="register__form" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        className="register__form--input" 
                        placeholder="Nombre"
                        name="name"
                        onChange={handleInput}
                    />
                    <input 
                        type="text" 
                        className="register__form--input" 
                        placeholder="Correo" 
                        name="email"
                        onChange={handleInput}
                    />
                    <input 
                        type="password" 
                        className="register__form--input" 
                        placeholder="Contraseña" 
                        name="password"
                        onChange={handleInput}
                    />
                    <button type="submit" className="register__form--btn">Registrarme</button>
                </form>
                <div className="register__back">
                    <Link to="/login">
                        Iniciar sesión
                    </Link>
                </div>
            </section>
        </main>
    )
}

const mapDispatchToProps = {
    registerRequest
};

export default connect(null, mapDispatchToProps)(Register);