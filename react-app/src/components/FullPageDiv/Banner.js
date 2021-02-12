import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton'


import './Banner.css'

const Banner = () => {
    const currentUser = useSelector(state => state.session.user);
    const user = currentUser.username

    return (
        <div className='bannerContainer'>
            <div className='bannerDiv'>
                <div className='logoDiv'>
                    <NavLink to="/teachers/:teacherId" style={{textDecoration: 'none'}}>
                        <div className='logoImage'></div>
                    </NavLink>
                </div>
                <div className='userDiv'>
                    <NavLink to="/login" style={{textDecoration: 'none'}}>
                        <div className='userName'>{user}</div>
                    </NavLink>
                    <div><LogoutButton /></div>
                </div>
            </div>
            <div className='decorDiv'></div>
        </div>
    )
}


export default Banner;
