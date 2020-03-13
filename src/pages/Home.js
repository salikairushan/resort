import React from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from  '../components/Services';
import FeaturedRooms from  '../components/FeaturedRooms';

export default function Home(){
    return (
        <React.Fragment>
            <Hero>
                <Banner title="luxurious rooms"
                        subTitle="rooms stating at LKR10000"
                >
                    <Link to="/rooms" className="btn-primary">
                        our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms/>
        </React.Fragment>
    );
};


