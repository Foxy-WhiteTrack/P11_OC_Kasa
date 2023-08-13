import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import About from "./pages/About/About.jsx";
import HousingSheet from "./pages/HousingSheet/HousingSheet.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/housing/:id",
        element: <HousingSheet />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: "*",
        element: <Error404 />
    },
]);


function Routes() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default Routes;
