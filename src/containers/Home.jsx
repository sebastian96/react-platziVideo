import React, {useState, useEffect} from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const Home = () => {
    
    const initialState = useInitialState(API);

    return initialState.length === 0 ? <h1>Loading...</h1>: (
        <>
            <main className="main">
                <Search />

                {initialState.mylist.length > 0 &&
                    <Categories title="Mi lista">
                        <Carousel>
                            {initialState.mylist.map(item => 
                                <CarouselItem key={item.id} {...item} />
                            )}
                        </Carousel>
                    </Categories>
                }

                <Categories title="Lo mas visto">
                    <Carousel>
                        {initialState.trends.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )}
                    </Carousel>
                </Categories>


                <Categories title="Lo mas nuevo">
                    <Carousel>
                        {initialState.originals.map(item => 
                            <CarouselItem key={item.id} {...item} />
                        )}
                    </Carousel>
                </Categories>
            </main>
        </>
    );
};

export default Home;