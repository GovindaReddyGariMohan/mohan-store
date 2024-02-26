import './footer.css';

import Switchfooter from './switchFooter';
import Footervalue from '../../constants/Footer-constant';
import { useLocation } from 'react-router-dom';
const Footer = () => {
    const path = useLocation().pathname.split('/')[1]
    if (path === 'bag') {
        <div className='remove-footer'>
            <div className='Footer'>
                {
                    Footervalue.map((value) => {
                        return (<Switchfooter type={value.type} {...value} key={Math.random()} />)
                    })
                }
            </div>
        </div>
    } else {
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

}
export default Footer;