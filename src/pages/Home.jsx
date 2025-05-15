import React from 'react';
import {Link, NavLink} from "react-router-dom";

export const Home = () => {
    return (
        <div>
Home Page
            <div>
                {/*<a href="http://localhost:5173/about">About</a>*/}
                <NavLink to={'about'}>About</NavLink>
                <NavLink to={'card'}>Card</NavLink>
                <NavLink to={''}>Home</NavLink>

            </div>
        </div>
    );
};

