import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cardReducer, * as card_actions from "../store/cards";
import * as deckActions from "../store/decks";

const Test = () => {
	let cards;
	let decks;
	let students;

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

		return dispatch(card_actions.editCard(1, card));
	};

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
    }

	return (
		<div>
			<button onClick={fetchCards}>Cards</button>

			<button onClick={addCard}> Add Card</button>

			<button onClick={editCard}> Edit Card 1</button>
			<div>
				<button onClick={getDeck}>Get Deck 1</button>

				<button onClick={editDeck}>Edit Deck 1</button>
			</div>

			{/* <button onClick={fetchDecks}>Cards</button>

            <button onClick={fetchStudents}>Cards</button> */}
		</div>
	);
};

export default Test;
