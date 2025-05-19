import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import {About} from "./pages/About.jsx";
import {Card} from "./pages/Card.jsx";
import {Category} from "./pages/Category.jsx";
import {NotFound} from "./pages/NotFound.jsx";
import {ProductDetails} from "./pages/ProductDetails.jsx";
import {Header} from "./components/Header.jsx";
import React from "react";
import {Layout} from "./components/Layout.jsx";
import {Footer} from "./components/Footer.jsx";

//
// const router = createBrowserRouter([
//     {
//         path: '/', element: (
//             <>
//                 <Header/>
//                 <Home/>
//                 <Footer/>
//             </>
//         )
//     },
//     {
//         path: 'about', element: (
//             <>
//                 <Header/>
//                 <About/>
//                 <Footer/>
//             </>
//         )
//     },
//     {
//         path: 'card', element: (
//             <>
//                 <Header/>
//                 <Card/>
//                 <Footer/>
//             </>
//         )
//     },
//     {
//         path: 'categories', element: (
//             <>
//                 <Header/>
//                 <Categories/>
//                 <Footer/>
//             </>
//         )
//     },
//     {
//         path: 'product', element: (
//             <>
//                 <Header/>
//                 <ProductDetails/>
//                 <Footer/>
//             </>
//         )
//     }
//     {
//         path: '*', element: (
//             <>
//                 <Header/>
//                 <NotFound/>
//                 <Footer/>
//             </>
//         )
//     }
// ])

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {index: true, element: <Home/>},
            {path: 'about', element: <About/>},
            {path: 'card', element: <Card/>},
            {path: 'category/:categoryId', element: <Category/>},
            {path: 'product/:productId', element: <ProductDetails/>},
            {path: '*', element: <NotFound/>},
        ]

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
