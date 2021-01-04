import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


import './Banner.css'

const Banner = () => {
    const currentUser = useSelector(state => state.session.user);
    const user = currentUser.username
    console.log(user)

    return (
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
                {/* <NavLink to="/sign-up" exact={true} activeClassName="active">
                    Sign Up
                </NavLink> */}
            </div>
        </div>
    )
}


export default Banner;
