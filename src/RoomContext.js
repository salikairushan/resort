import React from "react";

const RoomContext = React.createContext();

const RoomConsumer = RoomContext.Consumer;


const withRoomConsumer = (Component) => {
    const ConsumerWrapper = (props) => {
        return (
         <RoomConsumer>
             {
                 value => <Component {...props} context={value} />
             }
         </RoomConsumer>
        )
    };
    return ConsumerWrapper;
};

export  {RoomContext, RoomConsumer, withRoomConsumer};

