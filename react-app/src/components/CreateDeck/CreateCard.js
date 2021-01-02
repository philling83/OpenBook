import React from 'react';
// import { NavLink } from 'react-router-dom';

import ControlPanel from './ControlPanel';
import Card from '../Card'

import './CreateCard.css'

const CreateCard = () => {
    return (
        <div class='createCardDiv'>
            <div class='upperDiv'>
                <div className='blankCard'></div>
            </div>
            <div className='inputDiv'>
                <div className='card'>
                    <div className='cardHolder'>
                        <p>Subject: </p>
                        <p>Question: </p>
                        <p>Choices </p>
                        <p>Answer: </p>
                        <p>Image: </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// export default CreateCard;
