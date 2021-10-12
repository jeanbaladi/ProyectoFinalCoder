import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import { Cart } from "../Cart/Cart"
import Header from "../header/header"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { ItemList } from "../ItemList/ItemList"

export const AppRoutes = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path ="/Cart" component={Cart} />
                <Route path ="/producto/:id" component={ItemDetail} />
                <Route path="/" component={ItemList} exact/>
                <Route path="/:id" component={ItemList}/>
            </Switch>
        </Router>
    )
}