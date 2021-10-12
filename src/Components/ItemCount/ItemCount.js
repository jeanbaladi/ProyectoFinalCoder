import React, {useState} from "react";
import {Link} from "react-router-dom"


export const ItemCount = ({onAdd , stock}) => {

    const [contador, setContador] = useState(1)
    const [button, setButton] = useState(true)
    const addCarShop = () => {
        setButton(false)
        onAdd(contador)
    }

    return (
        <div>
            <button onClick={() => {contador === stock ? setContador(contador + 0) : setContador(contador + 1)}}> + </button>
            <span> {contador === stock ? `cantidad : ${contador} (stock maximo)` : `contador: ${contador}`} </span>
            <button onClick={() => {contador === 1 ? setContador(contador - 0) : setContador(contador - 1)}}> - </button>
            {button === true ? <button onClick={() => addCarShop()}> Agregar al carrito </button> : <button><Link to="/Cart">Ver carrito</Link></button>}
        </div>
    )
}
