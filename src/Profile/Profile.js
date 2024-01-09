import Profileitems from '../constants/constantProfile';
import React from 'react';
import './profile.scss'
import Modal from '../Components/Modal/Modal';
import Close from '../assets/close.png'
import { useSelector, useDispatch } from 'react-redux';
import { toggleProfileModal } from '../redux/actions/appActions';
import Mohanresume from '../assets/mohanResume.pdf'
const Profile = () => {
    const { isProfileModalOpen } = useSelector((state) => state.app);
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(toggleProfileModal(false));
    }
    return (
        <div className='profile'>
            {
                isProfileModalOpen &&
                <Modal>
                    <div className='profile-data'>
                        <div className='profile-details'>
                            <img src={Profileitems.image[0].imgUrl} alt="" className='profile-imag' />
                            <span>Iam React FullStack Developer Please Download My Profile</span>
                        </div>
                        <img src={Close} className='close' alt='close' onClick={handleClose} />
                        <a href={Mohanresume} download="Mohanresume" >
                            <button>Download</button>
                        </a>
                    </div>
                </Modal>
            }
        </div>
    )
}
export default Profile;