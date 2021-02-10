const GET_CARDS = 'cards-all'
const ADD_CARD = 'add-card'
const DELETE_CARD = 'delete-card'
const EDIT_CARD = 'edit-card'
const ADD_CARD_TO_ADD = 'add-card-to-add'
const REMOVE_CARD_TO_ADD = 'remove-card-to-add'
const CLEAR_CARD_TO_ADD = 'clear-card-to-add'

const setCards = (cards) => {
    return {type: GET_CARDS, payload: cards}
}

const newCard = (card) => {
    return {type: ADD_CARD, payload: card}
}

const editCard = (card) => {
    return {type: EDIT_CARD, payload: card}
}

const deleteCard = (card_id) => {
    return {type: DELETE_CARD, payload: card_id}
}

const addCardToAddAction = (card) => {
    return {type: ADD_CARD_TO_ADD, payload: card}
}

const removeCardToAddAction = (card_id) => {
    return {type: REMOVE_CARD_TO_ADD, payload: card_id}
}

const clearCardToAddAction = () => {
    return {type: CLEAR_CARD_TO_ADD}
}



export const allCards = () => async(dispatch) => {
    const response = await fetch('/api/cards/')

    const resJson = await response.json()

    dispatch(setCards(resJson['cards']))

    return response

}

export const addCard = (card) => async(dispatch) => {
    console.log('hit addCard')
    const response = await fetch('/api/cards/', {method:'POST', headers: {'Content-Type':'application/json'} ,body: JSON.stringify(card)})
    const responseJson = await response.json()
    console.log(responseJson)
    dispatch(newCard(responseJson))

    return response

}

export const changeCard = (card_id, card) => async(dispatch) => {
    const response = await fetch(`/api/cards/${card_id}`, {method:'PUT', headers: {'Content-Type':'application/json'} ,body: JSON.stringify(card)})

    const responseJson = await response.json()

    // console.log(responseJson)

    dispatch(editCard(responseJson))

    return responseJson
}

export const removeCard = (card_id) => async(dispatch) => {
    // const response = await fetch(`/api/cards/delete/${card_id}`, {method:'POST', headers: {'Content-Type':'application/json'}})

    // const responseJson = await response.json()

    dispatch(deleteCard(card_id))

    return 'succeeded'
}

export const AddCardToAdd = (card) => async(dispatch) => {
    return dispatch(addCardToAddAction(card))
}

export const RemoveCardToAdd = (card_id) => async(dispatch) => {
    return dispatch(removeCardToAddAction(card_id))
}

export const ClearCardToAdd = () => async(dispatch) => {
    return dispatch(clearCardToAddAction())
}




const cardReducer = (state = {cards:null, cards_to_add: []}, action) => {
    let new_state

    switch(action.type) {
        case GET_CARDS:
            new_state = Object.assign({}, state)

            new_state.cards = action.payload
            return new_state

        case ADD_CARD:
            new_state = Object.assign({}, state)
            if (!new_state.cards) new_state.cards = []
            new_state.cards.push(action.payload)
            return new_state

        case EDIT_CARD:
            new_state = Object.assign({}, state)
            // console.log(state.cards)
            for (let index in state.cards) {
                if (new_state.cards[index].id === action.payload.id) {
                    new_state.cards[index] = action.payload
                }
            }
            return new_state

        case DELETE_CARD:
            new_state = Object.assign({}, state)
            console.log('new state', new_state)
            console.log('payload', action.payload)
            for (let index in new_state.cards) {
                // console.log('hit for loop')
                // console.log('index', index)
                if (new_state.cards[index].id === action.payload) {
                    console.log('hit if statement')
                    new_state.cards.splice(index, 1)
                }
            }
            return new_state

        case ADD_CARD_TO_ADD:
            new_state = Object.assign({}, state)
            new_state.cards_to_add.push(action.payload)
            return new_state

        case REMOVE_CARD_TO_ADD:
            new_state = Object.assign({}, state)
            let new_cards_to_add = new_state.cards_to_add.filter(card => {
                if (card.id !== Number(action.payload)) {
                    return card
                }
            })
            new_state.cards_to_add = new_cards_to_add
            return new_state

        case CLEAR_CARD_TO_ADD:
            new_state = Object.assign({}, state)
            new_state.cards_to_add = []
            return new_state

        default:
            return state
    }


}

export default cardReducer
