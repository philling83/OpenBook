import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import * as deckActions from "../../store/decks";
import * as classActions from '../../store/classrooms'

import Card from '../CreateDeck/Card';

import './ViewDeck.css'

const ViewDeck = () => {
    const [loaded, setLoaded] = useState(false)
    const deck = useSelector((state) => state.deck.deck);
    const teacher_class_id = useSelector(state => state.session.user.classrooms_id)
    const dispatch = useDispatch();

    useEffect(() => {}, [deck, deck.id]);

    useEffect(()=> {
		(async() => {
			await dispatch(classActions.getRoom(teacher_class_id));
			await setLoaded(true);
			return;
		})()
    }, [dispatch, teacher_class_id])

    const cancelPreview = () => {
		return dispatch(deckActions.clearDeck());
	};

    console.log('GGGGGGGGGG', deck.cards[0], deck.id)

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
                            title='title'
                            choices={['choice', 'choice']}
                            answer={'answer'}
                            // title={deck.cards[0].title}
                            // choices={deck.cards[0].choices}
                            // answer={deck.cards[0].answer}
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
