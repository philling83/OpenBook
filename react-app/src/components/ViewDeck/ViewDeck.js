import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
// import * as deckActions from "../../store/decks";
// import * as classActions from '../../store/classrooms'

import Card from '../CreateDeck/Card';

import './ViewDeck.css'

const ViewDeck = () => {
    const deck = useSelector((state) => state.deck.deck);
    const [counter, setCounter] = useState(0)

    useEffect(() => {}, [deck, deck.id]);
    // useEffect(() => {}, [counter]);

    const nextCard = () => {
        let tempCounter = counter + 1
        if (!deck.cards[tempCounter]) return;
        setCounter(tempCounter)
    }
    const prevCard = () => {
        let tempCounter = counter - 1;
        if (!deck.cards[tempCounter]) return;
        setCounter(tempCounter)
    }

    return (
        <>
        {deck.cards.length !== 0 &&
            <div className='viewDeckContainer'>
                <div className='viewDeckDiv'>
                    <div className='flipperDiv'>
                    <div className='closeButtonDiv flipperButtonDiv' onClick={prevCard}>
                        <div className='closeInnerDiv'></div>
                        <div className='flipperButton backButton fas fa-arrow-circle-up'></div>
                    </div>
                    <div className='closeButtonDiv flipperButtonDiv forwardButton' onClick={nextCard}>
                        <div className='closeInnerDiv'></div>
                        <div className='flipperButton forwardButton fas fa-arrow-circle-down'></div>
                    </div>
                    </div>
                    <div className='threeCardDiv'>
                        {counter > 0 &&
                            <div className='cardHolder topCard'>
                                <Card
                                    confirm={false}
                                    title={deck.cards[counter-1].title}
                                    choices={deck.cards[counter-1].possible_answers}
                                    answer={deck.cards[counter-1].answer}
                                />
                            </div>
                        }
                        <div className='cardHolder middleCard'>
                            <Card
                                confirm={false}
                                title={deck.cards[counter].title}
                                choices={deck.cards[counter].possible_answers}
                                answer={deck.cards[counter].answer}
                            />
                        </div>
                        {counter + 1 !== deck.cards.length &&
                            <div className='cardHolder bottomCard'>
                                <Card
                                    confirm={false}
                                    title={deck.cards[counter+1].title}
                                    choices={deck.cards[counter+1].possible_answers}
                                    answer={deck.cards[counter+1].answer}
                                />
                            </div>
                        }
                    </div>
                </div>
                <div className='bookFooter'></div>
            </div>
        }
        </>
    )
}

export default ViewDeck
