import React from 'react';

import './YourDecks.css'

const YourDecks = () => {
    return (
        <div class='yourDecksDiv'>
            <div class='textDiv'>Your Decks</div>
            <div class='decksDiv'>
                <div class='yourFoldersDiv'>
                    <select class='folder'>
                        <option>Spanish Decks</option>
                        <option>Nouns</option>
                        <option>Conjugation</option>
                    </select>
                    <select class='folder'>
                        <option>Vocab Decks</option>
                        <option>Animals</option>
                        <option>People</option>
                        <option>Plants</option>
                    </select>
                </div>
                <div class='allDecksDiv'>
                    <div class='deckDiv'>
                        <div class='deckText'>
                            <div>Deck name</div>
                            <div>Created by</div>
                            <div>11/11/20</div>
                        </div>
                        <div class='deckImage'>
                            <img src="" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourDecks;
