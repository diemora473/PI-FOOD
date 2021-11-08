import React from "react";
import { Link } from "react-router-dom";
import styles from "../Css/Paginado.module.css"


export default function Paginado({ recipesPerPage, allrecipes, paginado }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allrecipes / recipesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (


        <nav >
            <ul className='paginado'>
                {
                    pageNumbers &&
                    pageNumbers.map(number => (
                        <div >

                            <Link to='home'>
                                <li className='number' key={number}>
                                    <a onClick={() => paginado(number)}  >{number}</a>
                                </li>
                            </Link>
                        </div>
                    ))

                }
            </ul>
        </nav>

    )
}