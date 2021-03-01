import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // const playerName = cart.name;
    const totalSalary = cart.reduce((prev, current) => prev + parseInt(current.salary), 0);
    return (
        <div>
            <h1>Build Your Own Team</h1>
            <h3>Player Added: {cart.length}</h3>
            <h4>Total Salary: ${totalSalary}</h4> 
            
             <ol>
                {
                    cart.map(player => <li> <img src={player.avatar} alt=""/> Player Name: {player.name} <p>salary: ${player.salary}</p></li>)
                }
            </ol> 
        </div>
    );
};

export default Cart;