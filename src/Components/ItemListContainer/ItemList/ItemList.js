import React, {useState , useEffect} from "react";
import {useParams} from "react-router-dom"
import "./styleItemList.css";
import { firestore } from "../../../firebase";
import {ItemListContainer} from "../itemListContainer"

export const ItemList = () => {
    const [productos , setProductos] = useState([])
    const {id} = useParams()     
    // const firebaseConfig = {
    //     apiKey: "AIzaSyCRBMP4cdUlM_5ilvgR5G1dberEK0FZN9g",
    //     authDomain: "react-coderhouse-53a63.firebaseapp.com",
    //     projectId: "react-coderhouse-53a63",
    //     storageBucket: "react-coderhouse-53a63.appspot.com",
    //     messagingSenderId: "557071402722",
    //     appId: "1:557071402722:web:af3c3fa2c5f467038280bb"
    //   };
    //   let fieJson = JSON.stringify(firebaseConfig)
    //   var encodedString = btoa(fieJson); // Base64 encode the String
    //   var decodedString = atob(encodedString); // Base64 decode the String
    //   let parseJson = JSON.parse(decodedString)
    //   console.log(parseJson);
    //   console.log( encodedString);
    //   console.log( decodedString);
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