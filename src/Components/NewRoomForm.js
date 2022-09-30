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
        <div className="card-body">
            <h4>Add a new room</h4>
            <form 
            className="container form-control card-footer" onSubmit={onSubmit}>
                <input className="form-control"
                    type="text" 
                    placeholder="name" 
                    onChange={(event) => setName(event.target.value)}
                    value={name} 
                />
                <input className="form-control" 
                    type="text" 
                    placeholder="area" 
                    onChange={handleAreaInput}
                    value={area}
                    
                />
                <button className="btn btn-info" type='submit'>Add Room</button>
            </form>
        </div>
    )
};
