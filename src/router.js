import { useRoutes } from "react-router-dom";
import Home from "./Home";
import Cart from "./cart/Cart";
import Plp from "./PLP/Plp";
import Shop from "./Components/Shop/shopProduct";
import Pdp from "./PDP/Pdp";
import Wishlist from "./wishlist/Wishlist";
import Login from "./login/Login";
const Router = () => {
    return useRoutes([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: "shop/:id",
            element: <Shop />
        },
        {
            path: "shop/:id/:id",
            element: <Plp />
        },
        {
            path: "shop/:id/:id/:userId",
            element: <Pdp />
        },
        {
            path: 'bag',
            element: <Cart />
        },
        {
            path:'wishlist',
            element:<Wishlist/>
        },
        {
            path:':id',
            element:<Login/>
        }
    ]);
}

export default Router;