import React from 'react'
import  { NavLink } from 'react-router-dom'

import './MinorAction.css'

const MinorAction = (props) => {

    return (
        <div className='minorActionDiv'>
            {props.createDeck &&
                <NavLink to='/CreateDeck'>
                    <button className='myButton'>Create Deck</button>
                </NavLink>
            }
            {props.completeDeck &&
                <NavLink to=''>
                    <button className='myButton'>Complete Deck</button>
                </NavLink>
            }
            {props.createCard &&
                <NavLink to='/CreateCard'>
                    <button className='myButton'>Create Card</button>
                </NavLink>
            }
        </div>
    )
}

export default MinorAction;
