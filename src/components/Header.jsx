import React from 'react';
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <>
            <div>
                {/*<a href="http://localhost:5173/about">About</a>*/}
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/card'}>Card</NavLink>

            </div>
        </>
    );
};

