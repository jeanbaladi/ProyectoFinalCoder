import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import { Cart } from "../Cart/Cart"
import Header from "../navBar/navBar"
import Item from "../ItemListContainer/ItemList/item/item"
import { ItemDetail } from "../ItemDetailContainer/ItemDetailContainer"

export const AppRoutes = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path ="/Cart" component={Cart} />
                <Route path ="/producto/:id" component={ItemDetail} />
                <Route path="/" component={Item} exact/>
                <Route path="/:id" component={Item}/>
            </Switch>
        </Router>
    )
}