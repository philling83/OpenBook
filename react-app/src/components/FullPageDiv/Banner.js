import React from 'react'

import './Banner.css'

const Banner = () => {
    return (
        <div class='bannerDiv'>
            <div class='logoDiv'>
                <div class='logoImage'></div>
                <div class='logoText'>openbook</div>
            </div>
            <div class='userDiv'>
                <div class='userName'>Guest User</div>
                <div class='avatar'></div>
            </div>
        </div>
    )
}

export default Banner;
