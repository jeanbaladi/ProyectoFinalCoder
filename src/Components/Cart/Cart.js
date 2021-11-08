import React, {useState} from "react"
import {useContext} from "react"
import { ItemContext } from "../../context/ItemContext"
import { firestore } from "../../firebase"


export const Cart = () => {
    
    const {carrito , setCarrito} = useContext(ItemContext)
    const [name, setName] = useState('')
    const [cell, setCell] = useState('')
    const [email, setEmail] = useState('')

    const handleText = ({target}) => {
        setName(target.value)
    }
    const handleCell = ({target}) => {
        setCell(target.value)
    }
    const handleEmail = ({target}) => {
        setEmail(target.value)
    }

    const finalPrice = [];
    const handleDelete = (id) => {
        setCarrito(carrito.filter(item => item[0].id !== id))
    }

    const Aa = (e) => {
        const db = firestore
        const coleccion = db.collection("ordenes")
    
        const nueva_orden = {
            buyer : {
                nombre: name,
                telf : cell,
                email: email
            } ,
            items : [
                {carrito } 
            ] ,
            // date : firestore.timestamp.now(), 
            total : carrito.length === 0 ? null : finalPrice.reduce((prev, next) => prev + next) 
            
        }
        const consulta = coleccion.add(nueva_orden)
        consulta
        .then(resultado =>{
            console.log(resultado.id);
        })
        .catch(err => {
            console.log(err);
        })
        setTimeout(() => {
            window.location.reload();
        }, 3000)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
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
                <h5>Rellene los datos para confirmar compra:</h5>
                <form onSubmit={ handleSubmit }>
                    <label>Nombre Y Apellido:</label> 
                    <input type="text" value={name} onChange={handleText} required />
                    <label>Celular:</label> 
                    <input type="number" value={cell} onChange={handleCell} required/>
                    <label>Email</label> 
                    <input type="email" value={email} onChange={handleEmail} required/>
                    {name.length === 0 || cell.length === 0 || email.length === 0 ? <input type="submit" /> : <input type="submit" onClick={Aa}/>}
                </form>
            </div> 
        )
    }
}