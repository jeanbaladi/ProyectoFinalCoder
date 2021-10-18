import React, {useState , useEffect , useContext } from "react";
import {useParams} from "react-router"
import { ItemContext } from "../../context/ItemContext";
import { firestore } from "../../firebase";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = () => {
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
    const {id} = useParams();
    const idArr = productos.filter(item => item.id === id)
    const stock = productos.filter(item => item.id === id).map(item => item.stock)
    let parseStock = parseInt(stock);

    const {setCarrito, carrito} = useContext(ItemContext);
    const addItem = (cantidad) => {
        const itemConCantidad = {...idArr, cantidad};
        let carShop = [];
        let exist = carrito.find(item => item[0].id ===  id);
        if(exist){
            carShop = carrito.map(item => item[0].id ===  id ? {...item, cantidad: item.cantidad + cantidad}:item);
        }
        else {
            carShop = [...carrito, itemConCantidad]
        }
        setCarrito(carShop);
    } 
    if (productos.length === 0){
        return(
            <p>cargando...</p>
        )
    }else if(productos.length > 0) {
        return (
            <div>
                {productos.filter(item => item.id === id).map(items => (
                    <>
                        <h2 key={items.id}>{items.title}</h2>
                        <p>stock disponible: {items.stock}</p>
                        <p>precio: {items.price}</p>
                    </>
                ))}
                <ItemCount onAdd={addItem} stock={parseStock}/>
            </div>
        )
        
    }
}