import React from 'react';
import {products} from "../data/data";
import {Link, useLocation, useParams, useSearchParams} from "react-router-dom";

export const Category = () => {
    const {categoryId} = useParams()
    const [searchParams, setSearchParams] = useSearchParams();

    const location = useLocation()
    console.log(location)

    // const maxPrice = searchParams.get('maxPrice') ? Number( searchParams.get('maxPrice')) : Infinity

    const maxPrice = location.state.maxPrice;

    const currentCategoryArray = products.filter((product) =>
    product.categoryId === categoryId && product.price <= maxPrice)

   function handleChange(e) {
        const value = e.target.value
       setSearchParams(value ? { maxPrice: value} : {})
   }
    return (
        <div>
                    <h1>
                        Category {categoryId}</h1>
                    <label htmlFor="maxPrice"></label>
                    <input
                        type='number'
                        id='maxPrice'
                        value={searchParams.get('maxPrice') || ''}
                        onChange={handleChange}
                    />
                    <ul style={{display: 'flex'}}>
                        {currentCategoryArray.map((product) => (
                            <li key={product.name}>
                                <Link to={`/product/${product.id}`}>
                                    {product.name} {product.price}$
                                    <img src={product.img} alt={product.name} style={{width: '150px'}}/>
                                </Link>
                            </li>
                        ))}
                    </ul>
        </div>
    );
};

