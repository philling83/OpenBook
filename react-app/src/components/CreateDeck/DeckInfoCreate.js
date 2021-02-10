import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'

import * as deckActions from '../../store/decks'
import * as cardActions from '../../store/cards'

const DeckInfoCreate = () => {
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
        <div>
            <form>
                <input placeholder='deck name' onChange={updateName}/>
                <input placeholder='subject' onChange={updateSubject} />
                <input placeholder='tags, seperate by comma' onChange={updateTags}/>
                <button onClick={handleSubmit}>Submit Deck</button>
            </form>
        </div>
    )
}

export default DeckInfoCreate