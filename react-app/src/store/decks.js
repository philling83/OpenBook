const GET_DECK = "deck/allCards"
const DELETE_DECK = "deck/delete"

const setDeck = (deck) => {
    return {type: GET_DECK, payload: deck}
}

const removeDeck = () => {
    return {type: DELETE_DECK, payload: null}
}

export const fetchDeck = (deckId) => async (dispatch) => {
    const response = await fetch(`/api/decks/${deckId}`)

    const resJSON = await response.json();

    dispatch(setDeck(resJSON));

    return response;
}


export const updateDeck = (deckId, formData) => async (dispatch) => {
    const response = await fetch(`/api/decks/${deckId}`, {
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)
    });

    const resJSON = await response.json();

    dispatch(setDeck(resJSON));

    return response;
}

export const deleteDeck = (deckId) => async (dispatch) => {
    const response = await fetch(`/api/decks/delete/${deckId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(deckId)
    });

    dispatch(removeDeck())

    return response;
}



const initialState = {deck: null};

const deckReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case GET_DECK:
            newState = Object.assign({}, state);
            newState.deck = action.payload;
            return newState;
        case DELETE_DECK:
            newState = Object.assign({}, state);
            newState.deck = action.payload;
            return newState;
        default:
            return state;
    }
}

export default deckReducer
