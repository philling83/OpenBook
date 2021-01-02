import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as deckActions from "../store/decks";
import * as cardActions from "../store/cards";
import Card from "./Card";
import "./DeckEditForm.css";
import { uid } from "react-uid";


const DeckEditForm = () => {
	const [selectedDeck, setSelectedDeck] = useState("");
	const [checkedRadio, setCheckedRadio] = useState(selectedDeck);
	const [loaded, setLoaded] = useState(false);
	const [currentCards, setCurrentCards] = useState(null);
	const [filteredDeck, setFilteredDeck] = useState('')
	const allCards = useSelector((state) => state.cards.cards);
	const decks = useSelector((state) => state.deck.decks);
	const deck = useSelector((state) => state.deck.deck);
	const cards = useSelector((state) => state.deck.cards);

	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			console.log("useEffect IIFE");
			await dispatch(deckActions.allDecks());
			await dispatch(cardActions.allCards());
			console.log("currentCards", currentCards);

			return setLoaded(true);
		})();
	}, [dispatch, deck, cards]);


	useEffect(() => {
		if (decks) {
			setFilteredDeck(decks.filter((deck) => deck.name === selectedDeck)[0]);
			console.log("deck", filteredDeck);
			return setCurrentCards(filteredDeck.cards);
		}
	}, [selectedDeck]);

	const handleChange = async(e) => {
		e.persist()
		console.log("e.target.value", e.target.value)
		setCheckedRadio(e.target.value);
		console.log("checkedRadio", checkedRadio)
		setSelectedDeck(e.target.value);
		console.log("selectedDeck", selectedDeck)
	};

	const addToDeck = async (e) => {
		e.preventDefault();
		let id = e.target.id;
		await dispatch(deckActions.addCard(id, filteredDeck.id));
		await dispatch(deckActions.fetchDeck(filteredDeck.id));
		await dispatch(deckActions.allDecks());
	};

	const removeFromDeck = async (e) => {
		e.preventDefault();
		let id = e.target.id;
		return dispatch(deckActions.removeCard(id, filteredDeck.id));
	};


	return (
		loaded && (
			<>
				<h1>Edit Decks:</h1>
				{/* {decks} */}
				<div onChange={handleChange}>
					{decks.map((deck, i) => (
						<label key={deck.name.concat(i)}>
							<input
								type="radio"
								checked={checkedRadio === deck.name}
								onChange={handleChange}
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
							<div key={card.title.concat(i)} className="deck-card">
								<p>Card #{i + 1}</p>
								<Card card={card} />

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
							<div className="deck-card" key={uid(card)}>
								<Card card={card} />
								<button id={card.id} onClick={addToDeck}>
									Add This Card
								</button>
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
