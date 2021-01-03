import React from 'react';
import { NavLink } from 'react-router-dom';

import './YourDecks.css'

const YourDecks = () => {
    return (
        <div className='yourDecksDiv'>
            <div className='textDiv'>Your Decks</div>
            <div className='decksDiv'>
                <div className='allDecksDiv'>
                    <NavLink to='/teacher/deckPreview'>
                        <div className='deckDiv'>
                            <div className='deckText'>
                                <div>Deck name</div>
                                <div>Created by</div>
                                <div>11/11/20</div>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}


export default YourDecks;
