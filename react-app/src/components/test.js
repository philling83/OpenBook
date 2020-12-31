import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import cardReducer, * as card_actions from '../store/cards'


const Test = () => {
    let cards 
    let decks
    let students

    const dispatch = useDispatch()

    const fetchCards = (event) => {
        event.preventDefault()

        return dispatch(card_actions.allCards())
    }

    const addCard = (event) => {
        event.preventDefault()

        const card = {'title':'react test', 'subject': 'react test', 'possible_answers': ['yes', 'no'], 'answer': 'yes', 'created_by': 1}


        return dispatch(card_actions.addCard(card))
    }

    const editCard = (event) => {
        event.preventDefault()

        const card = {'title':'react test', 'subject': 'react test', 'possible_answers': ['yes', 'no'], 'answer': 'yes', 'created_by': 1}

        return dispatch(card_actions.changeCard(1, card))

        // return dispatch(card_actions.allCards())
    }

    const deleteCard = (event) => {
        event.preventDefault()

        const card_id = 1

        return dispatch(card_actions.removeCard(card_id))
    }

    return (
        <div>
            <button onClick={fetchCards}>Cards</button>

            <button onClick={addCard}> Add Card</button>

            <button onClick={editCard}> Edit Card 1</button>

            <button onClick={deleteCard}>Delete Card 1</button>

            {/* <button onClick={fetchDecks}>Cards</button>

            <button onClick={fetchStudents}>Cards</button> */}


        </div>
    )
}


export default Test