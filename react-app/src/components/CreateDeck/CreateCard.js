import React from 'react'
import { NavLink } from 'react-router-dom'

import './CreateCard.css'

const CreateCard = () => {
    return (
        <div class='createCardDiv'>
            <div class='blankCard'>
                <div class='imageDiv'></div>
                <div class='cardText'></div>
            </div>
            <div class='imageLinkDiv'>
                <div class='text'>Paste Image Link here</div>
                <input class='imageLink'></input>
                <NavLink to="/test" exact={true} activeClassName="active">
                    Test
                </NavLink>
            </div>
        </div>
    )
}

export default CreateCard;
