import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import RoomsContainer from '../components/RoomsContainer';
import {Link} from 'react-router-dom';

export default function Rooms() {
    return (
        <React.Fragment>
            <Hero hero="roomsHero">
                <Banner title="our rooms">
                    <Link to="/" className="btn-primary">return home</Link>
                </Banner>
            </Hero>
            <RoomsContainer />
        </React.Fragment>
    );
}
