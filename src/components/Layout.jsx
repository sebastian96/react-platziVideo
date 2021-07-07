import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { withRouter } from 'react-router-dom';

const Layout = withRouter (({ children, location }) => (
    <div className="App">
        <Header location={location} />
        { children }
        <Footer location={location}/>
    </div>
));

export default Layout;