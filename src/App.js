import './app.scss';
import React, { useEffect } from "react";
import Navbar from './Components/Navbar/Navbar';
import { HashRouter } from 'react-router-dom';
//import { useParams } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Router from "./router";
import Profile from './Profile/Profile';
import { useDispatch } from 'react-redux';
import Plpproducts from './constants/plpPdpConstants';
import { addItem } from './redux/actions/cartActions';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const cartItemIds = localStorage.getItem('cart');
    if (cartItemIds !== null) {
      const cart = cartItemIds.split(",")
      let filterId
      if (cart.length >= 2) {
        filterId = Plpproducts.filter((items) => cart.some((id) => items.id === id))
        dispatch(addItem(filterId))
      }
    }
  }, [])
  
  return (
    <div>
      <HashRouter >
        <Navbar />
        <div className="App">
          <Router />
        </div>
        <Profile />
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App;
