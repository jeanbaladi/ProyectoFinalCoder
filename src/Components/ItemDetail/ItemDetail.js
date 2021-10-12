import React, { useContext } from "react"
import {useParams} from "react-router"
import { ItemContext } from "../../context/ItemContext";
import { ItemCount } from "../ItemCount/ItemCount";
import { getElementById } from "../Utils/getElementById";

export const ItemDetail = () => {
    
    const {id} = useParams();
    const item = getElementById(parseInt(id));
    const {setCarrito, carrito} = useContext(ItemContext);
    console.log(carrito )
    const addItem = (cantidad) => {
        const itemConCantidad = {...item, cantidad};
        let carShop = [];
        let exist = carrito.find(item => item.id ===  parseInt(id));

        if(exist){
            carShop = carrito.map(item => item.id ===  parseInt(id) ? {...item, cantidad: item.cantidad + cantidad}:item);
        }
        else {
            carShop = [...carrito, itemConCantidad]
        }
        setCarrito(carShop);
    } 

    return (
        <div>
            <h1>{item.name}</h1>
            <h2>{item.price}</h2>
            <ItemCount onAdd={addItem} stock={item.stock}/>
        </div>
    )
}