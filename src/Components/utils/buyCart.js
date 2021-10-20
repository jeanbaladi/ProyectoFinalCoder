import React, {useEffect} from "react"
import {useContext} from "react/cjs/react.development"
import { ItemContext } from "../../context/ItemContext"
import { firestore } from "../../firebase"


export const BuyCart = () => {

    const {carrito , setCarrito} = useContext(ItemContext)

    const nameArr = carrito.map(items => "productos: " + items[0].title + ". cantidad: " + items.cantidad)
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
            items : [{nameArr}] ,
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
}