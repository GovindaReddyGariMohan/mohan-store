import React, { useEffect, useState } from 'react';
import './pdp.scss'
import { useLocation, useParams } from 'react-router-dom';
import Pdpleft from './pdpLeft';
import Pdpright from './pdpRight';
import Plpproducts from '../constants/plpPdpConstants';
import { useDispatch } from 'react-redux';
import { toggleProfileModal } from '../redux/actions/appActions';
const Pdp = () => {
    const prod = useLocation().pathname.split('/')[3]
    const { userId } = useParams();
    const userData = { userId }
    const objectName = useLocation().pathname.split("/")[2]
    const catagory = objectName
    const catagoryItems = Plpproducts.filter((val) => val.catogory === catagory)
    const subCatagoryName = catagoryItems.filter((val) => val.subCatogory === prod)
    const filter = subCatagoryName.filter((items) => {
        return (items.id === userData.userId)
    })
    let pdpImages;
    if (filter && filter[0] && filter[0].pdpImages) {
        pdpImages = filter[0].pdpImages.images
    }
    const dispatch = useDispatch()
    const [showModelOnscroll, setShowModelOnscroll] = useState(true)
    const onScrollFire = async () => {
       
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
        <div className='order-page'>
            <div className='row '>
                <div className='col-7'>
                    <Pdpleft image={pdpImages} />
                </div>
                <div className='col-5'>
                    <Pdpright productDetails={filter} />
                </div>
            </div>
        </div>
    )
}

export default Pdp;