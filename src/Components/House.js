import React from "react";
import { NewRoomForm } from './NewRoomForm';

export const House = (props) => {
    const { house, updateHouse } = props;

    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house,
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
    updateHouse(updatedHouse);
    }

    const addNewRoom = (room) => updateHouse({ ...house, rooms: [...house.rooms, room]});

    const rooms = () => (
        <ul>
            {house.rooms.map((room, index) => (
                <div key={index}>
                    <label > {`${room.name} Area: ${room.area} sqft  `}</label><span>    </span>
                    <button className="btn btn-warning" onClick={(event) => deleteRoom(room._id)}>Delete</button>
                </div>
            ))}
        </ul>
    );

    return (
        <div className="card">
            <h1 className="card-header">{House.name}</h1>
            {
                rooms({ rooms, houseId: house._id, deleteRoom })
            }
            <NewRoomForm addNewRoom={addNewRoom} />
        </div>
    )
};
