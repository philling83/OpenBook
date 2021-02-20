import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import Card from '../CreateDeck/Card';

import './ViewDeck.css'

const ViewDeck = () => {
    const deck = useSelector((state) => state.deck.deck);

    useEffect(() => {}, [deck, deck.id]);

    return (
        <div className='viewDeckContainer'>
            <div className='viewDeckDiv'>
                <div className='flipperDiv'>
                <div className='closeButtonDiv flipperButtonDiv'>
                    <div className='closeInnerDiv'></div>
                    <div className='flipperButton backButton fas fa-arrow-circle-up'></div>
                </div>
                <div className='closeButtonDiv flipperButtonDiv forwardButton'>
                    <div className='closeInnerDiv'></div>
                    <div className='flipperButton forwardButton fas fa-arrow-circle-down'></div>
                </div>
                </div>
                <div className='threeCardDiv'>
                    <div className='cardHolder topCard'>
                        <Card
                            confirm={false}
                            title={'test'}
                            choices={['test', 'test']}
                            answer={'test'}
                        />
                    </div>
                    <div className='cardHolder middleCard'>
                        <Card
                            confirm={false}
                            title={'test'}
                            choices={['test', 'test']}
                            answer={'test'}
                        />
                    </div>
                    <div className='cardHolder bottomCard'>
                        <Card
                            confirm={false}
                            title={'test'}
                            choices={['test', 'test']}
                            answer={'test'}
                        />
                    </div>
                </div>
            </div>
            <div className='bookFooter'></div>
        </div>
    )
}

export default ViewDeck
