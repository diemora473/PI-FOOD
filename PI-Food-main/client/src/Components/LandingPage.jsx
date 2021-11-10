import React from "react";
import { Link } from "react-router-dom"
import '../Css/LandingPage.css'

export default function LandingPage() {
    return (

        <div className='Container'>
            {/* <h1>Bienvenidos a mi super paginaa</h1> */}
            <Link to='/home' > <img className="logo" src="https://cdn.imusa.com.co/resources/2017/11/vector-utensilios.png" alt="to home" />
                {/* <button>ingresar</button> */}
                <h1>Welcome</h1>
            </Link>
        </div>
    )
}