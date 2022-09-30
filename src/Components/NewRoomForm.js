import React, { useState } from "react";

export const NewRoomForm = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState(undefined);

    const handleAreaInput = (event) => {
        const int = parseInt(event.target.value, 10);
        setArea(int >= 0 ? int : '');
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (name && area) {
            props.addNewRoom({name, area});
            setName('');
            setArea('');
        } else {
            console.log('Invalid input');
        }
    };

    return (
        <div>
            <h4>Add a new room</h4>
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    placeholder="name" 
                    onChange={(event) => setName(event.target.value)}
                    value={name} 
                />
                <input 
                    type="text" 
                    placeholder="area" 
                    onChange={handleAreaInput}
                    value={area}
                />
                <button type='submit'>Add Room</button>
            </form>
        </div>
    )
};