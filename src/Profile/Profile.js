import Profileitems from '../constants/constantProfile';
import React from 'react';
import './profile.scss'
import Modal from '../Components/Modal/Modal';
import Close from '../assets/close.png'
import { useSelector, useDispatch } from 'react-redux';
import { toggleProfileModal } from '../redux/actions/appActions';
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
                        <button>DOWNLOAD</button>
                    </div>
                </Modal>
            }
        </div>
    )
}
export default Profile;