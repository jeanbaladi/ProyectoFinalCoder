import { AppRoutes } from "./Components/routes/AppRoutes";
import { ItemContext } from "./context/ItemContext";
import {useState} from "react";
import Item from "./Components/ItemListContainer/ItemList/item/item";

const App = () =>   {

   const [carrito , setCarrito] = useState([]);

   return (
            <div className="App">
               <ItemContext.Provider value={{carrito, setCarrito}}>
                  <AppRoutes/>
               </ItemContext.Provider>
            </div>
         )
}
export default App