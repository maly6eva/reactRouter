import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

export const Thanks = () => {
    const navigate= useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/')
        }, 5000);
        return () => clearTimeout(timer);
    })
    return (
        <div>
            You will be redirected to the home page in 5 seconds...
        </div>
    );
};

