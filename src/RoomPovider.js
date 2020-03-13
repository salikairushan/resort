import React, {Component} from 'react';
import {RoomContext} from "./RoomContext";
//import items from './data';
import Client from './Contentful';

export default class RoomProvider extends Component{

    constructor(props){
        super(props);
        this.formatData = this.formatData.bind(this);
        this.getRoom = this.getRoom.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.filterRooms = this.filterRooms.bind(this);
        this.getData = this.getData.bind(this);
        this.state = {
            rooms:[],
            sortedRooms:[],
            featuredRooms:[],
            loading:true,
            type:'all',
            capacity:1,
            price:0,
            minPrice:0,
            maxPrice:0,
            minSize:0,
            maxSize:0,
            breakfast:false,
            pets:false

        };
    }

    //get Data
    getData = async () => {
         try{
             let response = await Client.getEntries({
                 content_type:"beachResortRoomExample",
                 order:"-fields.price"
             });
             console.log('response',response.items);
             let rooms = this.formatData(response.items);
             let featuredRooms = rooms.filter(room => room.featured === true);
             let maxPrice = Math.max(...rooms.map(item => item.price));
             let maxSize = Math.max(...rooms.map(item => item.size));
             this.setState({
                 rooms,
                 featuredRooms,
                 sortedRooms:rooms,
                 loading:false,
                 price:maxPrice,
                 maxPrice,
                 maxSize
             });
         }catch (e) {
             console.log(e);
         }
    };


    componentDidMount(){
        this.getData();

    }

    formatData(items){
        let tempItems = items.map(item => {
            let itemId = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);

            let room = {
                ...item.fields,
                images,
                id:itemId
            };

            return room;

        });
        return tempItems;
    }

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find((room) => room.slug === slug);
        return room;
    };

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked:target.value;

        const name = target.name;

        this.setState({
            [name]:value
        },this.filterRooms);
    };

    filterRooms = () => {
        let {
            rooms,
            type,
            capacity,
            price,
            minSize,
            maxSize,
            breakfast,
            pets
        } = this.state;
        //all the rooms
        let tempRooms = [...rooms];
        //transform values
        capacity = parseInt(capacity);
        price = parseInt(price);
        //Filter by type
        if(type !== 'all'){
            tempRooms = tempRooms.filter(room => room.type === type);
        }
        //Filter by capacity
        if(type !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }
        //Filter by price
        tempRooms = tempRooms.filter(room => room.price <= price);

//filter by size
        tempRooms = tempRooms.filter(room => room.size >=  minSize && room.size <= maxSize);

        //filter by breakfast
        if(breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true);
        }
        //filter by pets
        if(pets) {
            tempRooms = tempRooms.filter(room => room.pets === true);
        }

        //change state
        this.setState({
            sortedRooms:tempRooms
        });
    };

    render (){
        return (
            <RoomContext.Provider value={{...this.state,getRoom:this.getRoom,handleChange:this.handleChange }}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}
