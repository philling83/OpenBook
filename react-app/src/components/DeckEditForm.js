import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as deckActions from "../store/decks";
import Card from "./Card";

const DeckEditForm = () => {
	const [selectedDeck, setSelectedDeck] = useState("");
	const [checkedRadio, setCheckedRadio] = useState(null);
	const [loaded, setLoaded] = useState(false);
	const [currentCards, setCurrentCards] = useState(null);
	const decks = useSelector((state) => state.deck.decks);

	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			await dispatch(deckActions.allDecks());
			return setLoaded(true);
		})();
	}, []);

	useEffect(() => {
		if (decks) {
			let filteredDeck = decks.filter((deck) => deck.name === selectedDeck)[0];
			setCurrentCards(filteredDeck.cards);
			console.log(currentCards);
		}
	}, [selectedDeck]);

	const handleChange = (e) => {
		setCheckedRadio(e.target.value);
		setSelectedDeck(e.target.value);
	};

	return (
		loaded && (
			<>
				<h1>Selected Deck:</h1>
				{selectedDeck ? <p>{selectedDeck}</p> : <p>None</p>}
				{currentCards ? (
					currentCards.map((card, i) => (
						<div>
                            <p>Card #{i+1}</p>
							<Card card={card} />
						</div>
					))
				) : (
					<></>
				)}
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
			</>
		)
	);
};

export default DeckEditForm;
