import React from 'react'
import { useSelector } from 'react-redux'
import  { NavLink } from 'react-router-dom'

import './MinorAction.css'

const MinorAction = (props) => {

    let deck = useSelector(state => state.deck.deck)

    const createOrEditDeck = () => {
        if (deck.id) {
            return (
                <NavLink to='/EditDeck'>
                    <button className='myButton'>Edit Deck</button>
                </NavLink>
            )
        }
        // else {
        //     return (
        //         <NavLink to='/CreateDeck'>
        //             <button className='myButton'>Create Deck</button>
        //         </NavLink>
        //     )
        // }
    }


    return (
        <div className='minorActionDiv'>
            {props.createDeck &&
                createOrEditDeck()
            }
            {props.completeDeck &&
                <NavLink to=''>
                    <button className='myButton'>Complete Deck</button>
                </NavLink>
            }
            {/* {props.createCard &&
                <NavLink to='/CreateCard'>
                    <button className='myButton'>Create Card</button>
                </NavLink>
            } */}
        </div>
    )
}

export default MinorAction;
