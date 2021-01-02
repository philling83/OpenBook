import React from 'react';

const PublicDecks = () => {
    return (
        <div className='yourDecksDiv'>
            <div className='textDiv'>Public Decks</div>
            <div className='decksDiv'>
                <div className='yourFoldersDiv'>
                    <select className='folder'>
                        <option>Preschool</option>
                        <option>Nouns</option>
                        <option>Conjugation</option>
                    </select>
                    <select className='folder'>
                        <option>Kindergarten</option>
                        <option>Animals</option>
                        <option>People</option>
                        <option>Plants</option>
                    </select>
                    <select className='folder'>
                        <option>1st Grade</option>
                        <option>Animals</option>
                        <option>People</option>
                        <option>Plants</option>
                    </select>
                    <select className='folder'>
                        <option>2nd Grade</option>
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

export default PublicDecks;
