import './Footer.css';
import { useState } from 'react';
import Switchfooter from './Switchfooter';
import Footervalue from '../../constants/Footer-constant';
const Footer = () => {
    const [data] = useState({ ...Footervalue })
    return (
        <div className='Footer'> 
            {
                Footervalue.map((value) => {
                    return (<Switchfooter type={value.type} {...value} key={Math.random()} />)
                })
            }
        </div>
    )
}
export default Footer;