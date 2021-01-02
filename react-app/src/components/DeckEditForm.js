import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as deckActions from "../store/decks";
import * as cardActions from "../store/cards";
import Card from "./Card";
import "./DeckEditForm.css";

let filteredDeck

function useForceUpdate() {
	const [value, setValue] = useState(0); // integer state
	return () => setValue((value) => value + 1); // update the state to force render
}

const DeckEditForm = () => {
	const [selectedDeck, setSelectedDeck] = useState("");
	const [checkedRadio, setCheckedRadio] = useState(null);
	const [loaded, setLoaded] = useState(false);
    const [currentCards, setCurrentCards] = useState(null);
	const allCards = useSelector((state) => state.cards.cards);
    const decks = useSelector((state) => state.deck.decks);

    const dispatch = useDispatch();
    const forceUpdate = useForceUpdate()

	useEffect(() => {
		(async () => {
			await dispatch(deckActions.allDecks());
			await dispatch(cardActions.allCards());
			console.log(allCards);

			return setLoaded(true);
		})();
	}, [dispatch]);

	useEffect(() => {
		if (decks) {
			filteredDeck = decks.filter((deck) => deck.name === selectedDeck)[0];
			setCurrentCards(filteredDeck.cards);
			console.log(allCards);
		}
	}, [selectedDeck]);

	const handleChange = (e) => {
		setCheckedRadio(e.target.value);
		setSelectedDeck(e.target.value);
	};

	const addToDeck = async(e) => {
		e.preventDefault();
        let id = e.target.id
        dispatch(deckActions.addCard(id, filteredDeck.id))
        return forceUpdate()

	};

	const removeFromDeck = async(e) => {
        e.preventDefault();
        let id = e.target.id
        return dispatch(deckActions.removeCard(id, filteredDeck.id))

    };

    const deckCards = (currentCards) => {
        
    }

	return (
		loaded && (
			<>
				<h1>Edit Decks:</h1>
				<div onChange={handleChange}>
					{decks.map((deck) => (
						<label>
							<input
								type="radio"
								checked={checkedRadio === deck.name}
								key={deck.name}
								value={deck.name}
							/>
							{deck.name}
						</label>
					))}
				</div>
				{selectedDeck ? (
					<>
						<p>{selectedDeck}</p>
						<h2>Cards in this Deck:</h2>
					</>
				) : (
					<p>None</p>
				)}
				<div className="deck-card-container">
					{currentCards ? (
						currentCards.map((card, i) => (
							<div className="deck-card">
								<p>Card #{i + 1}</p>
								<Card key={i} card={card} />

								<button id={card.id} onClick={removeFromDeck}>
									Remove this Card
								</button>
							</div>
						))
					) : (
						<></>
					)}
				</div>

				{selectedDeck ? <h2>Card Library</h2> : <></>}
				<div className="deck-card-container">
					{selectedDeck ? (
						allCards.map((card, i) => (
							<div className="deck-card">
								<Card card={card} />
								<button id={card.id} onClick={addToDeck}>Add This Card</button>
							</div>
						))
					) : (
						// allCards.map((card => <Card card={card} />))
						<></>
					)}
				</div>
			</>
		)
	);
};

export default DeckEditForm;
