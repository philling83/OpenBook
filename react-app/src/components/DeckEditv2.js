import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as deckActions from "../store/decks";
import * as cardActions from "../store/cards";

const DeckEditv2 = () => {
	const decks = useSelector((state) => state.deck.decks);
	const allCards = useSelector((state) => state.cards.cards);
	const [loaded, setLoaded] = useState(false);
	const [selectedDeck, setSelectedDeck] = useState("");
	const [deckId, setDeckId] = useState("");

	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			await dispatch(deckActions.allDecks());
			await dispatch(cardActions.allCards());
			setLoaded(true);
		})();
	}, [dispatch]);

	useEffect(() => {
		(async () => {
			setSelectedDeck(await dispatch(deckActions.fetchDeck(deckId)));
		})();
	}, [deckId]);

	useEffect(() => {
		console.log("selectedDeck", selectedDeck);
	}, [selectedDeck]);

    const selectDeck = (e) => setDeckId(e.target.id);

    const removeCard = (e) => console.log("card id: ",e.target.id);

    const addCard = (e) => console.log("card id: ",e.target.id);

	return (
		loaded && (
			<>
				<div>
					<h2>Your Decks:</h2>

					{decks.map((deck, i) => (
						<div key={deck.name.concat(i)}>
							<p>{deck.name}</p>
							<button id={deck.id} onClick={selectDeck}>
								Edit this Deck
							</button>
						</div>
					))}
				</div>
				<div>
					{selectedDeck ? (
						<>
							<h3>This Deck's Cards:</h3>
							{selectedDeck.cards.map((card, i) => (
								<div key={card.title.concat(i)}>
									<p>{card.title}</p>
									<button id={card.id} onClick={removeCard}>Remove</button>
								</div>
							))}
						</>
					) : (
						<></>
					)}
				</div>
				<div>
					<h3>All Cards in the OpenBook Library</h3>
					{allCards.map((card, i) => (
						<div key={card.title.concat(i)}>
							<p>{card.title}</p>
							<button id={card.id} onClick={addCard}>Add</button>
						</div>
					))}
				</div>
			</>
		)
	);
};

export default DeckEditv2;
