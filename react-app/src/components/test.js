import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cardReducer, * as card_actions from "../store/cards";
import * as deckActions from "../store/decks";

const Test = () => {
	

	const dispatch = useDispatch();

	const fetchCards = (event) => {
		event.preventDefault();

		return dispatch(card_actions.allCards());
	};

	const addCard = (event) => {
		event.preventDefault();

		const card = {
			title: "react test",
			subject: "react test",
			possible_answers: ["yes", "no"],
			answer: "yes",
			created_by: 1,
		};

		return dispatch(card_actions.addCard(card));
	};

	const editCard = (event) => {
		event.preventDefault();

		const card = {
			title: "react test",
			subject: "react test",
			possible_answers: ["yes", "no"],
			answer: "yes",
			created_by: 1,
		};

		return dispatch(card_actions.changeCard(1, card));
	};
    
    const deleteCard = (event) => {
        event.preventDefault()

        const card_id = 1

        return dispatch(card_actions.removeCard(card_id))
    }

	const getDeck = (event) => {
		event.preventDefault();
		const deckId = 1;
		return dispatch(deckActions.fetchDeck(deckId));
    };

    const editDeck = (event) => {
        event.preventDefault();

        const deckId = 1;
        const userId = 1;

        const formData = {
            "name": "Redux Edit",
            "subject": "Redux",
            "tags": ["Redux"],
            "created_by": userId
        }

        return dispatch(deckActions.updateDeck(deckId, formData));
    };

    
    
    const createDeck = (event) => {
        event.preventDefault();

        const userId = 1;

        const formData = {
            "name": "Redux Create",
            "subject": "Redux",
            "tags": ["Redux"],
            "created_by": userId
        }

        return dispatch(deckActions.createDeck(formData));
    };

    const deleteDeck = (event) => {
        event.preventDefault();

        const deckId = 1;

        return dispatch(deckActions.deleteDeck(deckId))
    }

	return (
		<div>
			<button onClick={fetchCards}>Cards</button>

			<button onClick={addCard}> Add Card</button>

			<button onClick={editCard}> Edit Card 1</button>
			<div>
				<button onClick={getDeck}>Get Deck 1</button>

            <button onClick={deleteCard}>Delete Card 1</button>

            {/* <button onClick={fetchDecks}>Cards</button>

                <button onClick={deleteDeck}>Delete Deck 1</button>

                <button onClick={createDeck}>Create a New Deck</button>
			</div>

			{/* <button onClick={fetchDecks}>Cards</button>

            <button onClick={fetchStudents}>Cards</button> */}
            </div>
		</div>
	);
};

export default Test;
