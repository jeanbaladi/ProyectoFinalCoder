import React, {useContext} from "react"
import {Link} from "react-router-dom"
import { ItemContext } from "../../../context/ItemContext"
import "./styleCarWidget.css"
const CarWidget = () => {
    const {carrito } = useContext(ItemContext)
    const arr = carrito.map(items=> items.cantidad)
    const arrLength = arr.length
    return (
        <>
        <div className="flexi">
            <Link to="/Cart"><span className="material-icons">add_shopping_cart</span></Link>
            <Link to="/Cart">Total de productos: {arrLength}</Link>
        </div>
        </>
    )
} 

export default CarWidget 