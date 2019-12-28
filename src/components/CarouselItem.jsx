import React from 'react';
import endGame from '../assets/static/poster/end_game.jpg';
import play from '../assets/static/play.png';
import plus from '../assets/static/plus.png';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = () => (
    <div className="carousel__item">
        <img className="carousel__item--poster" src={endGame} alt="Avengers end game" />
        <div className="carousel__item--details">
            <div className="icons">
                <img src={play} alt="Ver pelicula" />
                <img src={plus} alt="Ver detalles de pelicula"/>
            </div>
            <p className="title">Avengers end game</p>
            <p className="subTitle">2019 +14 190 minutos</p>
        </div>
    </div>
);

export default CarouselItem;