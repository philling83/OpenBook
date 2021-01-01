import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as deckActions from "../store/decks";

const DeckEditForm = () => {
    const [selectedDeck, setSelectedDeck] = useState("");
    const [checkedRadio, setCheckedRadio] = useState(null)
	const [loaded, setLoaded] = useState(false);
	const decks = useSelector((state) => state.deck.decks);

	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			await dispatch(deckActions.allDecks());
			return setLoaded(true);
		})();
	}, []);

    useEffect(() => {}, [dispatch]);

    const handleChange = (e) => {
        setCheckedRadio(e.target.value);
        setSelectedDeck(e.target.value);
    }

	return (
		loaded && (
			<>
                <h1>Selected Deck:</h1>
				{selectedDeck ? <p>{selectedDeck}</p> : <p>None</p>}
				<div onChange={handleChange}>
					{decks.map((deck) => (
						<label><input type="radio" checked={checkedRadio === deck.name} key={deck.name} value={deck.name}/>{deck.name}</label>
                    ))}
				</div>
			</>
		)
	);
};

export default DeckEditForm;
