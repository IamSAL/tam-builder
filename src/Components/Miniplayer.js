import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

const Miniplayer = ({ player, handleRemove }) => {
    return (
        <div>
            <div className="card mb-3 " style={{ overflow: "hidden" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={player.image} alt="..." className="img-fluid" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <span className="d-flex"><h5 className="card-title">{player.name}</h5> | <span className="card-text"> {player.salary}</span></span>
                            <a href="#" className="btn btn-danger btn-sm" onClick={(e) => handleRemove(e, player)}><FontAwesomeIcon icon={faMinusCircle} /> Remove</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Miniplayer
