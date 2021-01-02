import React from 'react';

const PublicCards = () => {
    return (
        <div className='yourDecksDiv'>
            <div className='textDiv'>Public Cards</div>
            <div className='decksDiv'>
                <div className='yourFoldersDiv'>
                    <select className='folder'>
                        <option>Spanish Cards</option>
                        <option>Nouns</option>
                        <option>Conjugation</option>
                    </select>
                    <select className='folder'>
                        <option>Vocab Cards</option>
                        <option>Animals</option>
                        <option>People</option>
                        <option>Plants</option>
                    </select>
                </div>
                <div className='allDecksDiv'>
                    <div className='deckDiv'>
                        <div className='deckText'>
                            <div>Card name</div>
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

export default PublicCards;
