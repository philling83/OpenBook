import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as deckActions from "../store/decks";
import * as cardActions from "../store/cards";

const DeckEditv2 = () => {
    const decks = useSelector((state) => state.deck.decks);
    const cards = useSelector((state) => state.deck.deck.cards)
	const allCards = useSelector((state) => state.cards.cards);
	const [loaded, setLoaded] = useState(false);
    const [deckId, setDeckId] = useState("");
	const [selectedDeck, setSelectedDeck] = useState({cards:[]});

	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			await dispatch(deckActions.allDecks());
			await dispatch(cardActions.allCards());
            setLoaded(true);
		})();
	}, [dispatch, cards]);

	useEffect(() => {
		(async () => {
			setSelectedDeck(await dispatch(deckActions.fetchDeck(deckId)));
		})();
	}, [dispatch, deckId]);

	const selectDeck = (e) => setDeckId(e.target.id);

	const removeCard = async (e) => {
		const cardId = e.target.id;
		const deckId = selectedDeck.id;
		return dispatch(deckActions.removeCard(cardId, deckId));
	};

	const addCard = async (e) => {
		const cardId = e.target.id;
        const deckId = selectedDeck.id;
        if (!deckId) return;
		await dispatch(deckActions.addCard(cardId, deckId));
	};

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
							{cards.map((card, i) => (
								<div key={card.title.concat(i)}>
									<p>{card.title}</p>
									<button id={card.id} onClick={removeCard}>
										Remove
									</button>
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
							<button id={card.id} onClick={addCard}>
								Add
							</button>
						</div>
					))}
				</div>
			</>
		)
	);
};

export default DeckEditv2;
