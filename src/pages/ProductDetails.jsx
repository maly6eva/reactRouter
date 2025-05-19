import React from 'react';
import {Link, useParams} from "react-router-dom";
import {products} from "../data/data.js";


export const ProductDetails = () => {
    const {productId} = useParams()

    const currentProduct = products.find((product) => (
        product.id === parseInt(productId, 10)
    ))
    return (
        <div>
            {currentProduct ? (
                    <>
                        <h1>Product Detalis</h1>
                        <h2>{currentProduct.name}</h2>
                        <p>Price: {currentProduct.price}$</p>
                        <img src={currentProduct.img} alt={currentProduct.name} style={{width: '150px'}} />
                    </>
            ): ( <p>Not Product</p>
            )}


        </div>
    );
};

