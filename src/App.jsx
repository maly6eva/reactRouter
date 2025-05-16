import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import {About} from "./pages/About.jsx";
import {Card} from "./pages/Card.jsx";
import {Categories} from "./pages/Categories.jsx";
import {NotFound} from "./pages/NotFound.jsx";
import {ProductDetails} from "./pages/ProductDetails.jsx";
import {Header} from "./components/Header.jsx";
import React from "react";



const router = createBrowserRouter([
    {path: '/', element: (
        <>
            <Header/>
            <Home/>
        </>
            )
           },
    {path: 'about', element: (
        <>
            <Header/>
            <About/>
        </>
            )
           },
    {path: 'card', element: (
        <>
            <Header/>
            <Card/>
        </>
            )
           },
    {path: 'categories', element: (
        <>
            <Header/>
            <Categories/>
        </>
            )
           },
    {path: '*', element: (
        <>
            <Header/>
            <NotFound/>
        </>
            )
           },
    {path: 'product', element: (
        <>
            <Header/>
            <ProductDetails/>
        </>
            )
        }
])

function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App;
