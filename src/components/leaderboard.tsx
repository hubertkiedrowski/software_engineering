import React, { useState } from 'react';
import "./css/leaderboard.css";
import Profiles from './profiles';
import { Link } from 'react-router-dom';
import { LeaderboardData } from './database';

const handleClick = (e: { target: any }) => {
    console.log(e.target)


}
const Leaderboard = () => {

    return (
        <>
            <div className= "board">
                <h1 className= "leaderboard">Leaderboard</h1>

                <div className="duration">
                    <button onClick={handleClick} data-id="7">7 Days</button>
                    <button onClick={handleClick} data-id="30">30 days</button>
                    <button onClick={handleClick} data-id="0">All Time</button>
                </div>
                <span></span>
                <Profiles />              
            </div>
        </>
    );
}

export default Leaderboard;