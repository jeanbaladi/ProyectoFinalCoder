import React from "react";
import { data } from "../../data/data";
import { Card } from "../Card/Card";
import {useParams} from "react-router-dom"
import {styleItemList} from "./styleItemList.css"


export const ItemList = () => {
    const parametros = useParams();
    if(parametros.id === "1") {
        return (
            <div className="container">
                <div className="cards-Items row">
                    {data.filter(item => item.id > 4).map(items => <Card name={items.name} img={items.img} id={items.id} key={items.id}/>)}
                </div>
            </div>
        )
    } else if (parametros.id === "2"){
        return (
            <div className="container">
                <div className="cards-Items row">
                    {data.filter(item => item.id <= 4).map(items => <Card name={items.name} img={items.img} id={items.id} key={items.id}/>)}
                </div>
            </div>
        )
    }
    return (
        <div className="container">
            <div className="cards-Items row">
                {data.map(item => <Card name={item.name} img={item.img} id={item.id} key={item.id}/>)}
            </div>
        </div>
    )
}