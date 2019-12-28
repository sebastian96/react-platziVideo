import React from 'react';
import '../assets/styles/components/Categories.scss'
const Categories = ({ children, title }) => (
    <section className="carousel">
        <h2 className="carousel__category">{ title }</h2>
        {children}
    </section>
);

export default Categories;