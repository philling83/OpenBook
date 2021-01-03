import React from 'react';
import { NavLink } from 'react-router-dom';


import './Banner.css'

const Banner = () => {
    return (
        <div className='bannerDiv'>
            <div className='logoDiv'>
                <NavLink to="/teachers/:teacherId" style={{textDecoration: 'none'}}>
                    <div className='logoImage'></div>
                </NavLink>
            </div>
            <div className='userDiv'>
                <NavLink to="/login" style={{textDecoration: 'none'}}>
                    <div className='userName'>Guest User</div>
                </NavLink>
                {/* <NavLink to="/sign-up" exact={true} activeClassName="active">
                    Sign Up
                </NavLink> */}
            </div>
        </div>
    )
}


export default Banner;
