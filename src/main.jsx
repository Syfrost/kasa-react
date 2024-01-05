import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import {createBrowserRouter} from "react-router-dom";
import {RouterProvider} from "react-router";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Error404 from "./pages/Error404/Error404.jsx";
import Accommodation from "./pages/Accommodation/Accommodation.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home/>,

            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/accommodation/:id",
                element:<Accommodation />,
            },
            {
                path: "/*",
                element:<Error404 />,
            },

        ]
    },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
