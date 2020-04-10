import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

const Home = props => {
    const {mylist, trends, originals, find} = props;

    return (
        <>
            <main className="main">
                <Search />
                {find ? 
                    <Categories title="Encontrados">
                        <Carousel>
                            {find.map(item => 
                                <CarouselItem key={item.id} {...item} isList/>
                            )}
                        </Carousel>
                    </Categories>
                    :
                    <>
                        {mylist.length > 0 &&
                            <Categories title="Mi lista">
                                <Carousel>
                                    {mylist.map(item => 
                                        <CarouselItem key={item.id} {...item} isList/>
                                    )}
                                </Carousel>
                            </Categories>
                        }

                        <Categories title="Lo mas visto">
                            <Carousel>
                                {trends.map(item =>
                                    <CarouselItem key={item.id} {...item} />
                                )}
                            </Carousel>
                        </Categories>


                        <Categories title="Lo mas nuevo">
                            <Carousel>
                                {originals.map(item => 
                                    <CarouselItem key={item.id} {...item} />
                                )}
                            </Carousel>
                        </Categories>
                    </>
                }

            </main>
        </>
    );
};

const mapStateToProps = state => {
    return {
        mylist: state.mylist,
        trends: state.trends,
        originals: state.originals,
        find: state.find
    }
}

export default connect(mapStateToProps, null)(Home)