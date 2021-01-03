import React from 'react';
import { NavLink } from 'react-router-dom';


import './Banner.css'

const Banner = () => {
    return (
        <div className='bannerDiv'>
            <div className='logoDiv'>
                <NavLink to="/" exact={true} activeClassName="active">
                    <div className='logoImage'></div>
                </NavLink>
            </div>
            <div className='userDiv'>
                <div className='userName'>Guest User</div>
                {/* <NavLink to="/sign-up" exact={true} activeClassName="active">
                    Sign Up
                </NavLink> */}
            </div>
        </div>
    )
}


export default Banner;
