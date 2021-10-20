import React, {useState , useEffect} from "react";
import {useParams} from "react-router-dom"
import "./styleItemList.css";
import { firestore } from "../../../firebase";
import {ItemListContainer} from "../itemListContainer"

export const ItemList = () => {
    const [productos , setProductos] = useState([])
    const {id} = useParams()     
            useEffect(() => {
                const db = firestore
                const coleccion = db.collection("items")
                // let consulta = coleccion.where("category", "==", 2) 
                // consulta = consulta.get()
                let consulta = coleccion.get()
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
        
        
        
    if (productos.length === 0) {
        return (
            <p>
                Cargando...
            </p>
        )
    }
    else if(id === "1") {
        return (
            <div className="container">
                <div className="cards-items row">
                    {productos.filter(items => items.category === 2).map(item => <ItemListContainer name={item.title} img={item.image} id={item.id} stock={item.stock} key={item.id} price={item.price} /> 
                    )}
                </div>
            </div>
        )
    }else if(id === "2"){
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