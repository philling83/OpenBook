import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as deckActions from '../../store/decks'
import * as cardActions from '../../store/cards'


const DeckInfoEdit = () => {
    
    const selected_cards = useSelector(state => state.cards.cards_to_add)
    const current_deck = useSelector(state => state.deck.deck)
    const user = useSelector(state => state.session.user)

    const [name, setName] = useState(current_deck.name)
    const [subject, setSubject] = useState(current_deck.subject)
    const [tags, setTags] = useState(current_deck.tags)


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

    const handleSubmit = (e) => {

        e.preventDefault()

        let formData = {
            'name': name,
            'subject': subject,
            'tags': tags,
            'created_by': user.id
        }

        dispatch(deckActions.updateDeck(current_deck.id, formData))


        let added_cards = selected_cards.filter(card => {
            if (!current_deck.cards.includes(card)) {
                return card
            }
        })

        let removed_cards = current_deck.cards.filter(card => {
            if (!selected_cards.includes(card)) {
                return card
            }
        })

        for (let card of added_cards) {
            dispatch(deckActions.addCard(card.id, current_deck.id))
        }

        for (let card of removed_cards) {
            dispatch(deckActions.removeCard(card.id, current_deck.id))
        }

        dispatch(deckActions.allDecks())
        dispatch(deckActions.fetchDeck(current_deck.id))
        dispatch(cardActions.ClearCardToAdd())

    }

    return (
        <div>
            <form>
                <input placeholder='deck name' defaultValue={name} onChange={updateName}/>
                <input placeholder='subject' defaultValue={subject} onChange={updateSubject} />
                <input placeholder='tags, seperate by comma' defaultValue={tags} onChange={updateTags}/>
                <button onClick={handleSubmit}>Submit Changes</button>
            </form>
        </div>
    )
}

export default DeckInfoEdit