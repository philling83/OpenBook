import React from 'react'

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
            </div>
        </div>
    )
}

export default CreateCard;
