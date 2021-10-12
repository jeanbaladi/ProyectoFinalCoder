import {Link} from "react-router-dom"
import React from "react"
import CarWidget from "./cartWitge/carWidget"
const NavBar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/1">Comida</Link></li>
                    <li><Link to="/2">Articulos</Link></li>
                    <li><Link to="/Cart">Carrito</Link></li>
                    <li><CarWidget/></li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar