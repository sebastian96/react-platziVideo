import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutRequest } from '../actions';
import gravatar from '../utils/gravatar';
import logo from '../assets/static/logo.png';
import usuario from '../assets/static/usuario.png';
import '../assets/styles/components/Header.scss';

const Header = props => {
    const { user, location } = props;
    const hasUser = Object.keys(user).length > 0;
    const pathName = location.pathname.split('/')[1];

    const handleLogout = () => {
        props.logoutRequest({});
    }

    return (
        <header className={`header is_${pathName}`}>
            <div className="header__logo">
                <Link to="/">
                    <img src={logo} alt="Logo platzi video" />
                </Link>
            </div>
            <nav className="header__menu">
                {hasUser ?
                    <img 
                        className="header__menu--profile" 
                        src={gravatar(user.email)} 
                        alt={user.email}
                    />
                    :
                    <img 
                        className="header__menu--profile" 
                        src={usuario} 
                        alt="Perfil de usuario" 
                    />
                }
                <p>Perfil</p>
                <ul className="header__menu--items">
                    {hasUser ? 
                        <li className="header__menu--item">
                            <a className="header__menu--link" href="">Cuenta</a>
                        </li>
                        : null
                    }

                    {hasUser ? 
                        <li className="header__menu--item">
                            <a href="#logout" className="header__menu--link" onClick={handleLogout}>
                                Cerrar sesión
                            </a>
                        </li>
                        :
                        <li className="header__menu--item">
                            <Link to="/login" className="header__menu--link">
                                Iniciar sesión
                            </Link>
                        </li>
                    }
                </ul>
            </nav>
        </header>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    logoutRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);