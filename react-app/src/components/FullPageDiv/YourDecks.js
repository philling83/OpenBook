import React from 'react';

import './YourDecks.css'

const YourDecks = () => {
    return (
        <div className='yourDecksDiv'>
            <div className='textDiv'>Your Decks</div>
            <div className='decksDiv'>
                <div className='yourFoldersDiv'>
                    <select className='folder'>
                        <option>Spanish Decks</option>
                        <option>Nouns</option>
                        <option>Conjugation</option>
                    </select>
                    <select className='folder'>
                        <option>Vocab Decks</option>
                        <option>Animals</option>
                        <option>People</option>
                        <option>Plants</option>
                    </select>
                </div>
                <div className='allDecksDiv'>
                    <div className='deckDiv'>
                        <div className='deckText'>
                            <div>Deck name</div>
                            <div>Created by</div>
                            <div>11/11/20</div>
                        </div>
                        <div className='deckImage'>
                            <img src="" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourDecks;
