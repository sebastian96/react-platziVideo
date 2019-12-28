import React from 'react';
import logo from '../assets/static/logo.png';
import usuario from '../assets/static/usuario.png';
import '../assets/styles/components/Header.scss';

const Header = () => (
    <header className="header">
        <div className="header__logo">
            <img src={logo} alt="Logo platzi video" />
        </div>
        <nav className="header__menu">
            <img className="header__menu--profile" src={usuario} alt="Perfil de usuario" />
            <p>Perfil</p>
            <ul className="header__menu--items">
                <li className="header__menu--item">
                    <a className="header__menu--link" href="">Cuenta</a>
                </li>
                <li className="header__menu--item">
                    <a className="header__menu--link" href="">Cerrar sesión</a>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;