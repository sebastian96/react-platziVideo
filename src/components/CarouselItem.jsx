import React from 'react';
import play from '../assets/static/play.png';
import plus from '../assets/static/plus.png';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
    <div className="carousel__item">
        <img className="carousel__item--poster" src={cover} alt="Avengers end game" />
        <div className="carousel__item--details">
            <div className="icons">
                <img src={play} alt="Ver pelicula" />
                <img src={plus} alt="Ver detalles de pelicula"/>
            </div>
            <p className="title">{title}</p>
            <p className="subTitle">
                {`${year} ${contentRating} ${duration}`}
            </p>
        </div>
    </div>
);

export default CarouselItem;