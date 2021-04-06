import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
const Player = ({ player, handleAdd }) => {

    return (
        <div className="card m-2" >
            <img src={player.image} className="card-img-top" alt="..." style={{ objectFit: "cover", height: "200px" }} />
            <div className="card-body">
                <h5 className="card-title">{player.name}</h5>
                <p className="card-text">{player.salary}</p>
                <a href="#" className="btn btn-primary" onClick={(e) => handleAdd(e, player)}> <FontAwesomeIcon icon={faPlusCircle} /> Add</a>
            </div>
        </div>
    )
}

export default Player
