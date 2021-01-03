import React from 'react';

const YourCards = () => {
    return (
        <div className='yourDecksDiv'>
            <div className='textDiv'>Your Cards</div>
            <div className='decksDiv'>
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

export default YourCards;
