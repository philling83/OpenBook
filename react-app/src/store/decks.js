const GET_DECK = "deck/allCards";
const DELETE_DECK = "deck/delete";
const SET_DECKS = "decks";

const setDeck = (deck) => {
	return { type: GET_DECK, payload: deck };
};

const removeDeck = () => {
	return { type: DELETE_DECK, payload: null };
};

const setDecks = (decks) => {
    return { type: SET_DECKS, payload: decks}
};

export const fetchDeck = (deckId) => async (dispatch) => {
	const response = await fetch(`/api/decks/${deckId}`);

	const resJSON = await response.json();

	dispatch(setDeck(resJSON));

	return response;
};

export const updateDeck = (deckId, formData) => async (dispatch) => {
	const response = await fetch(`/api/decks/${deckId}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(formData),
	});

	const resJSON = await response.json();

	dispatch(setDeck(resJSON));

	return response;
};

export const deleteDeck = (deckId) => async (dispatch) => {
	const response = await fetch(`/api/decks/delete/${deckId}`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(deckId),
	});

	dispatch(removeDeck());

	return response;
};

export const createDeck = (formData) => async (dispatch) => {
	const response = await fetch(`/api/decks`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(formData),
	});

	const resJSON = await response.json();

	dispatch(setDeck(resJSON));

	return response;
};

export const searchDecks = (term) => async (dispatch) => {
	const response = await fetch(`/api/decks/search/${term}`);

	const resJSON = await response.json();

	dispatch(setDecks(resJSON.decks));

	return response;
};

export const allDecks = () => async (dispatch) => {
    const response = await fetch(`/api/decks/all-decks`)

    const resJSON = await response.json();

    dispatch(setDecks(resJSON.decks));

    return response;
};

export const addCard = (cardId, deckId) => async (dispatch) => {
	const response = await fetch(`/api/cards/${cardId}/add_to_deck/${deckId}`, {method: 'POST'})
	return response;
};

export const removeCard = (cardId, deckId) => async (dispatch) => {
	const response = await fetch(`/api/cards/${cardId}/remove_from_deck/${deckId}`, {method: 'POST'})
	return response;
};

const initialState = { deck: null, decks: null };

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

        case SET_DECKS:
            newState = Object.assign({}, state);
            newState.decks = action.payload;
            return newState;

		default:
			return state;
	}
};

export default deckReducer;
