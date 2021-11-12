import React from "react";
import { Link } from "react-router-dom"
import '../Css/LandingPage.css'

export default function LandingPage() {
    return (

        <div className='Container'>
            <Link to='/home' > <img className="logo" src="https://cdn.imusa.com.co/resources/2017/11/vector-utensilios.png" alt="to home" />
                <h1>Welcome</h1>
            </Link>
        </div>
    )
}