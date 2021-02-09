import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
import * as deckActions from "../../store/decks";

import "./YourDecks.css";

const YourDecks = () => {
	const decks = useSelector((state) => state.deck.decks);
	// const user = useSelector((state) => state.session.user);
    const [loaded, setLoaded] = useState(false);
    const [deckId, setDeckId] = useState("")

	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			await dispatch(deckActions.allDecks());
			return setLoaded(true);
		})();
    }, [dispatch]);

    useEffect(() => {
        (async () => dispatch(deckActions.fetchDeck(deckId)))()
    }, [dispatch, deckId])

    const handleSelection = (e) => {
        const deckId = e.target.id
        return setDeckId(deckId);
    };

	return (
		loaded && (
			<div className="yourDecksDiv">
				<div className="textDiv">Your Decks</div>
				<div className="decksDiv">
					<div className="allDecksDiv">
						{decks.map((deck, i) => (
							<div key={deck.name.concat(i)} onClick={handleSelection}>
								<div id={deck.id} className="deckDiv">
									<div className="deckText">
										<div>{deck.name}</div>
										<div>{deck.user.username}</div>
										<div>{deck.subject}</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		)
	);
};

export default YourDecks;
