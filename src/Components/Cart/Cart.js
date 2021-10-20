import React, {useEffect} from "react"
import {useContext} from "react/cjs/react.development"
import { ItemContext } from "../../context/ItemContext"
import { firestore } from "../../firebase"


export const Cart = () => {

    const {carrito , setCarrito} = useContext(ItemContext)
    const arrEmpty = []
    const nameArr = carrito.map(items => items[0])
    let push = arrEmpty.push(nameArr );
    let aa = carrito.map(items=> items.cantidad)
    console.log(push);
    const finalPrice = [];
    const handleDelete = (id) => {
        setCarrito(carrito.filter(item => item[0].id !== id))
    }
    useEffect(() =>{
        const db = firestore
        const coleccion = db.collection("ordenes")
    
        const nueva_orden = {
            buyer : {
                nombre: "jean",
                telf : "2056954",
                email: "email@email.com"
            } ,
            items : [{nameArr }] ,
            // date : firestore.timestamp.now(), 
            total : 10
        }
        const consulta = coleccion.add(nueva_orden)
        consulta
        .then(resultado =>{
            console.log(resultado.id);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

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
                        const total = items.cantidad > items[0].stock ? items[0].price * items[0].stock : items[0].price * items.cantidad;
                        finalPrice.push(total);
                        return (
                        <><li key={items[0].id}>producto: {items[0].title}</li>
                        <li>Costo por unidad: {items[0].price} </li>
                        <li>cantidad: {items.cantidad > items[0].stock ? `${items[0].stock} (stock maximo alcanzado)` : items.cantidad} total: {total}</li>
                        <li><button onClick={() => handleDelete(items[0].id)}>eliminar</button></li></>);
                        }
                    )}
                </ul>
                <h3>total: {finalPrice.reduce((prev, next) => prev + next)}</h3>
                <button>comprar</button>
            </div> 
        )
    }
}