import React from "react"
import {useContext} from "react/cjs/react.development"
import { ItemContext } from "../../context/ItemContext"

export const Cart = () => {

    const {carrito , setCarrito} = useContext(ItemContext)

    const finalPrice = [];
    const handleDelete = (id) => {
        setCarrito(carrito.filter(item => item.id !== id))
    }
    
    if (carrito.length === 0) {
        return (
            <h2>No hay productos en el carrito</h2>
        )
    }else {
        return (
            <div>
                <h2>producto</h2>
                <ul>
                    {carrito.map((items) => {
                        const total = items.cantidad > items.stock ? items.price * items.stock : items.price * items.cantidad;
                        finalPrice.push(total);
                        return (
                        <><li key={items.id}>producto: {items.name}</li>
                        <li>Costo por unidad: {items.price} </li>
                        <li>cantidad: {items.cantidad > items.stock ? `${items.stock} (stock maximo alcanzado)` : items.cantidad} total: {total}</li>
                        <li><button onClick={() => handleDelete(items.id)}>eliminar</button></li></>);
                        }
                    )}
                </ul>
                <h3>total: {finalPrice.reduce((prev, next) => prev + next)}</h3>
            </div> 
        )
    }
}