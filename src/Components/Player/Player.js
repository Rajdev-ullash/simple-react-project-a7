import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Cart from './Cart/Cart';
import User from './User/User';
import './Player.css';


const Player = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        setUser(fakeData);
    }, [])
    const [addPlayer, setAddPlayer] = useState([]);
    const handleAddPlayer =(player) => {
        const newPlayer = [...addPlayer, player];
        setAddPlayer(newPlayer);

    }
    return (

        <div>
            <h1>Total Player: {users.length}</h1>
            <div className="info-container">
                <div className="user-container">
                    {
                        users.map(user => <User user={user} handleAddPlayer={handleAddPlayer}></User>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={addPlayer}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Player;