import './app.scss';
import React, { useEffect } from "react";
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Router from "./router";
import Profile from './Profile/Profile';
import { useDispatch } from 'react-redux';
import Plpproducts from './constants/plpPdpConstants';
import { addItem } from './redux/actions/cartActions';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const cartItemIds = localStorage.getItem('cart').split(",");
    const filterId = Plpproducts.filter((items) => cartItemIds.some((id) => items.id === id))
    dispatch(addItem(filterId))
  })
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="App">
          <Router />
        </div>
        <Profile />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
