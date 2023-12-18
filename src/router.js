import { useRoutes } from "react-router-dom";
import Home from "./Home";
import Cart from "./cart/cart";
import Plp from "./PLP/Plp";
import Shop from "./Components/Shop/Shopproduct";
import Pdp from "./PDP/Pdp";

const Router = () => {
    return useRoutes([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: "/shop/:id",
            element: <Shop />
        },
        {
            path: "/shop/men/:id",
            element: <Plp />
        },
        {
            path: "/shop/womens/:id",
            element: <Plp />
        },

        {
            path: "/shop/:id/:id/:userId",
            element: <Pdp />
        },
        {
            path: '/bag',
            element: <Cart />
        }
    ]);
}

export default Router;