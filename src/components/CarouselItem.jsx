import React from 'react';
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../actions';

import play from '../assets/static/play.png';
import plus from '../assets/static/plus.png';
import remove from '../assets/static/remove.png';

import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = (props) => {
    const { id, cover, title, year, contentRating, duration, isList } = props;
    const handleSetFavorite = () => {
        props.setFavorite({ id, cover, title, year, contentRating, duration })
    }
    const handleDeleteFavorite = (itemId) => {
        props.deleteFavorite(itemId)
    }
    return (
        <div className="carousel__item">
            <img className="carousel__item--poster" src={cover} alt="Avengers end game" />
            <div className="carousel__item--details">
                <div className="icons">
                    <img src={play} alt="Ver pelicula" />

                    {isList ? 
                        <img src={remove} alt="Eliminar de favoritos" onClick={() => handleDeleteFavorite(id)} />
                        :
                        <img src={plus} alt="Agregar a favoritos" onClick={handleSetFavorite} />
                    }
                </div>
                <p className="title">{title}</p>
                <p className="subTitle">
                    {`${year} ${contentRating} ${duration}`}
                </p>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite
}

export default connect(null, mapDispatchToProps)(CarouselItem);