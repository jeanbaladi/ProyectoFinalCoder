import React, {useState , useEffect} from "react";
import {useParams} from "react-router-dom"
import "./styleItemList.css";
import { firestore } from "../../../firebase";
import {ItemListContainer} from "../itemListContainer"


export const ItemList = () => {
    const [productos , setProductos] = useState([])
    useEffect(() => {
        const db = firestore
        const coleccion = db.collection("items")
        const consulta = coleccion.get()
        consulta
            .then((resultado) => {
                let arr = []
                resultado.docs.forEach(producto => {
                    const finalProduct = {
                        id : producto.id,
                        ...producto.data()
                    }
                    arr.push(finalProduct)
                    setTimeout(() => {setProductos(arr)}, 1000)
                })
            })
            .catch(() => {
                console.log("Mal")
            })
    }, [])
    const parametros = useParams()
    if (productos.length === 0) {
        return (
            <p>
                Cargando...
            </p>
        )
    }else if(parametros.id === "1") {
        return (
            <div className="container">
                <div className="cards-items row">
                    {productos.filter(items => items.category === 2).map(item => <ItemListContainer name={item.title} img={item.image} id={item.id} stock={item.stock} key={item.id} price={item.price} /> 
                    )}
                </div>
            </div>
        )
    }else if(parametros.id === "2"){
        return (
            <div className="container">
                <div className="cards-items row">
                    {productos.filter(items => items.category === 1).map(item => <ItemListContainer name={item.title} img={item.image} id={item.id} stock={item.stock} key={item.id} price={item.price} />
                     )}
                </div>
            </div>
        )
    }
    return (
        <div className="container">
            <div className="cards-items row">
                {productos.map(item => <ItemListContainer name={item.title} img={item.image} id={item.id} stock={item.stock} key={item.id} price={item.price} />)}
            </div>
        </div>
    )
}
export default ItemList