import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/static/logo.png';
import usuario from '../assets/static/usuario.png';
import '../assets/styles/components/Header.scss';

const Header = () => (
    <header className="header">
        <div className="header__logo">
            <Link to="/">
                <img src={logo} alt="Logo platzi video" />
            </Link>
        </div>
        <nav className="header__menu">
            <img className="header__menu--profile" src={usuario} alt="Perfil de usuario" />
            <p>Perfil</p>
            <ul className="header__menu--items">
                <li className="header__menu--item">
                    <a className="header__menu--link" href="">Cuenta</a>
                </li>
                <li className="header__menu--item">
                    <Link to="/login" className="header__menu--link">
                        Iniciar sesión
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;