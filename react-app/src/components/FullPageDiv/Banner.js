import React from 'react';
import { NavLink } from 'react-router-dom';


import './Banner.css'

const Banner = () => {
    return (
        <div class='bannerDiv'>
            <div class='logoDiv'>
                <NavLink to="/" exact={true} activeClassName="active">
                    <div class='logoImage'></div>
                </NavLink>
            </div>
            <div class='userDiv'>
                <div class='userName'>Guest User</div>
                <NavLink to="/sign-up" exact={true} activeClassName="active">
                    Sign Up
                </NavLink>
            </div>
        </div>
    )
}


export default Banner;
