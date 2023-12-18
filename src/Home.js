import Posters from "./Components/Posters/Poster";
import Coupans from "./Components/Posters/Coupans";
import Products from "./Components/Products/Products";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleProfileModal } from "./redux/actions/appActions";
const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(toggleProfileModal(true))
    return () => dispatch(toggleProfileModal(false))
  }, [])
  return (
    <>
      <Posters />
      <Coupans />
      <Products />
    </>
  )
}

export default Home;