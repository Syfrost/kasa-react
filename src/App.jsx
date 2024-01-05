import { useState } from 'react'
import './App.scss'
import Header from "./components/Header/Header.jsx";
import Carousel from "./components/Carousel/Carousel.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {Outlet} from "react-router";

function App() {

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default App