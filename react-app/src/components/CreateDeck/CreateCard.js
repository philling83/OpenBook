import React from 'react'
import { NavLink } from 'react-router-dom'

import './CreateCard.css'

const CreateCard = () => {
    return (
        <div className='createCardDiv'>
            <div className='blankCard'>
                <div className='imageDiv'></div>
                <div className='cardText'></div>
            </div>
            <div className='imageLinkDiv'>
                <div className='text'>Paste Image Link here</div>
                <input className='imageLink'></input>
                <NavLink to="/test" exact={true} activeClassName="active">
                    Test
                </NavLink>
            </div>
        </div>
    )
}

export default CreateCard;
