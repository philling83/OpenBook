import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'

import * as deckActions from '../../store/decks'
import * as cardActions from '../../store/cards'

import './DeckInfoCreate.css'

const DeckInfoCreate = (props) => {
    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [tags, setTags] = useState([])

    const created_by = useSelector(state => state.session.user.id)
    const cards = useSelector(state => state.cards.cards_to_add)

    const dispatch = useDispatch()

    const updateName = (e) => {
        setName(e.target.value)
    }

    const updateSubject = (e) => {
        setSubject(e.target.value)
    }

    const updateTags = (e) => {
        const formattedTags = e.target.value.split(',')
        const cleanedTags = formattedTags.map(el => {
            if (el[0] === ' ') {
                return el.slice(1)
            } else {
                return el
            }
        })

        setTags(cleanedTags)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        let formData = {
            'name': name,
            'subject':subject,
            'tags':tags,
            'created_by': created_by
        }

        let new_deck = await dispatch(deckActions.createDeck(formData))

        console.log(new_deck)

        for (let card of cards) {
            dispatch(deckActions.addCard(card.id, new_deck.id))
        }
        dispatch(deckActions.allDecks())
        dispatch(cardActions.ClearCardToAdd())
    }

    return (
        <div className='deckInfoDiv'>
            <div className='upperInfoDiv'>
                <h1 className='deckInfoHeader'>Enter Your Deck Information ~</h1>
                <div className='closeButtonDiv' onClick={props.toggleModal}>
                    <div className='closeInnerDiv'></div>
                    <i className='closeButton fas fa-window-close'></i>
                </div>
            </div>
            <form className='deckInfoForm'>
                <div className='infoDiv'>
                    <h1 className='infoLabel'>Deck Name ~</h1>
                    <input className='infoInput' placeholder='ex: Arithmetic' onChange={updateName}/>
                </div>
                <div className='infoDiv'>
                    <h1 className='infoLabel'>Subject ~</h1>
                    <input className='infoInput' placeholder='ex: Math' onChange={updateSubject} />
                </div>
                <div className='infoDiv'>
                    <h1 className='infoLabel'>Comma Seperated Keywords ~</h1>
                    <input className='infoInput' placeholder='ex: addition, subtraction' onChange={updateTags}/>
                </div>
                <button className='infoButtonSubmit' onClick={handleSubmit}>Submit Deck</button>
            </form>
        </div>
    )
}

export default DeckInfoCreate
