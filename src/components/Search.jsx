import React from 'react';
import { connect } from 'react-redux';
import { searchVideo } from '../actions';
import '../assets/styles/components/Search.scss'

const Search = (props) => {
    const handleSearch = event => {
        props.searchVideo(event.target.value);
    }
    return (
        <section className="search">
            <h2 className="search__title">¿Que quieres ver hoy?</h2>
            <input 
                className="search__input" 
                type="text" 
                placeholder="Buscar..." 
                onChange={handleSearch}/>
        </section>
    )
}

const mapDispatchToProps = {
    searchVideo
}
export default connect(null, mapDispatchToProps)(Search);