import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './User.css'
//  import '../bootstrap/dist/css/bootstrap.min.css'

// import {Button} from 'react-bootstrap';

const User = (props) => {
    const { avatar, name, catagory, salary } = props.user;
    return (
        <div className="player-info">
            <img src={avatar} alt="" />
            <div className="player-detail">
                <h4>Player Name: {name}</h4>
                <h5>Type: {catagory}</h5>
                <h4>Salary: ${salary}</h4>
                <button onClick={() => { props.handleAddPlayer(props.user) }} className="btn btn-success"><FontAwesomeIcon icon={faPlus} />Add Player</button>
            </div>

        </div>
    );
};

export default User;