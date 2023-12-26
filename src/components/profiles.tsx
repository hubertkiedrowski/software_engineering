import React from 'react';
import "./css/leaderboard.css";
import { Link } from 'react-router-dom';
import { LeaderboardData } from './database';

const Profiles = (LeaderboardData: any) => {

    return (
        <>  
            <div id="profile">
                {Item(LeaderboardData)}
            </div>
        
        </>
    );
}

export default Profiles;


const Item = (data: any[]) => {
    return(
            <>
                {
                    <div className="flex" >
                    <div className="item">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60 "alt="picture" />

                <div className="info">
                    <h3 className="name text-dark">TestName</h3>
                    <span>TestLocation</span>
                </div>
                </div>
                <div className="item">
                <span>TestScore</span>
            </div>
        </div>
    }
    </>
            
)}