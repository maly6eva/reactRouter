import React from 'react';
import {Link, useNavigate} from "react-router-dom";

export const Card = () => {
    const navigate = useNavigate();
    return (
        <div>
            Card Page
            {/*<Link to={'/thanks'}>*/}
            {/*    <button>order</button>*/}
            {/*</Link>*/}
            <button onClick={() => navigate('/thanks')}>order</button>
        </div>
    );
};

