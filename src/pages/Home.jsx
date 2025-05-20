import React from 'react';
import {categories} from "../data/data";
import {Link} from "react-router-dom";


export const Home = () => {
    return (
        <div>
            <Link to='/category/Electronics' state={{ from: 'Home Page', maxPrice: 600}}>Look Category test</Link>
            <h1>Categories</h1>
            <ul style={{display: 'flex'}}>
                {categories.map(category => (
                <li key={category.id}>
                    <Link to={`/category/${category.name}`}>
                        {category.name}
                        <img src={category.img} alt={category.name} style={{width: '150px'}}/>
                    </Link>
                </li>
            )) }</ul>
        </div>
    );
};

