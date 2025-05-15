import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import {About} from "./pages/About.jsx";
import {Card} from "./pages/Card.jsx";
import {Categories} from "./pages/Categories.jsx";
import {NotFound} from "./pages/NotFound.jsx";
import {ProductDetails} from "./pages/ProductDetails.jsx";


const router = createBrowserRouter([
    {path: '/', element: <Home/>},
    {path: 'about', element: <About/>},
    {path: 'card', element: <Card/>},
    {path: 'categories', element: <Categories/>},
    {path: '*', element: <NotFound/>},
    {path: 'product', element: <ProductDetails/>}
])

function App() {
    return <RouterProvider router={router}/>
}

export default App;
