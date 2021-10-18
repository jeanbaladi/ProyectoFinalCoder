import React from "react"
import {Link} from "react-router-dom"

export const ItemListContainer = ({name, img, id }) => {

    return (
        
            <div className="col m12 l4">
                <div className="card">
                    <div className="card-image">
                        <img src={img} alt="..."/>
                        <span className="card-title">{name}</span>
                    </div>
                    <div className="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                        <Link to={`producto/${id}`}>Ver detalles</Link>
                    </div>
                </div>
            </div>
         
    )         
}