import React, {useContext} from 'react';
import {RoomContext} from '../RoomContext';
import Title from './Title';

//get all unique values
const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))];
};

const RoomsFilter = ({rooms}) => {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;
    //get unique types
    let types = getUnique(rooms,'type');
    //add all
    types = ['all',...types];
    //map to jsx
    types = types.map((item,index) => {
        return (
            <option key={index} value={item}>{item}</option>
        );
    });

    //get unique capacity
    let capacities = getUnique(rooms,'capacity');
    //map to jsx
    capacities = capacities.map((item,index) => {
        return (
            <option key={index} value={item}>{item}</option>
        );
    });

    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form  className="filter-form">
                {/* select type*/}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {
                            types
                        }
                    </select>
                </div>
                {/* end of select type*/}
                {/* guests */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {
                            capacities
                        }
                    </select>
                </div>
                {/* end of select guests*/}
                {/*room price*/}
                <div className="form-group">
                    <label htmlFor="price">Room Price ${price}</label>
                    <input type="range"
                           name="price"
                           id="price"
                           className="form-control"
                           min={minPrice}
                           max={maxPrice}
                           value={price}
                           onChange={handleChange}
                    />
                </div>
                {/* end of room price*/}
                {/*Size*/}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size"  value={minSize} onChange={handleChange} className="size-input"/>
                        <input type="number" name="maxSize" id="size"  value={maxSize} onChange={handleChange} className="size-input"/>

                    </div>
                </div>
                {/*End of size*/}
                {/*Extras*/}
                <div className="form-group">
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="breakfast"
                            id="breakfast"
                            checked={breakfast}
                            onChange={handleChange}
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="pets"
                            id="pets"
                            checked={pets}
                            onChange={handleChange}
                        />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/*End of extras*/}
            </form>
        </section>
    );
};

export default RoomsFilter;
