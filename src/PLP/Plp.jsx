import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Plpleft from "./plpLeft";
import Plpright from "./plpRight";
import Plptop from "./plpTop";
import Plpproducts from "../constants/plpPdpConstants";
import { useDispatch } from "react-redux";
import { toggleProfileModal } from "../redux/actions/appActions";

const Plp = () => { 
    const objectName = useLocation().pathname.split("/")[2]
    const productName = useLocation().pathname.split("/")[3];
    const catagory = objectName
    const subCatogoryName = productName
    const pathName = Plpproducts.filter((val) => val.catogory === catagory)
    const [sub, setSub] = useState(pathName.filter((val) => val.subCatogory === subCatogoryName))
    const dispatch = useDispatch()
    const [showModelOnscroll, setShowModelOnscroll] = useState(true)
    const onScrollFire = () => {

        if (window.scrollY > 100) {
            dispatch(toggleProfileModal(true))
        }
        setShowModelOnscroll(_ => {
            document.removeEventListener("scroll", onScrollFire);
            return false
        })

    }
    useEffect(() => {

        setTimeout(() => {
            dispatch(toggleProfileModal(true))
        }, 30000)

        document.addEventListener("scroll", onScrollFire);
        return () => dispatch(toggleProfileModal(false))
    }, [showModelOnscroll])


    return (
        <div className="plp"> 
            <div className="plp-top"><Plptop plpTop={sub} /></div>
            <div className="plp-container">
                <div className="row plp-content">
                    <div className="col-3 left">
                        <Plpleft sub={sub} setSub={setSub} />
                    </div>
                    <div className="col-9">
                        <Plpright plpRight={sub} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Plp;