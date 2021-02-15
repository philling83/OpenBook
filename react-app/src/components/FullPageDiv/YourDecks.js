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
		console.log(e.target.id)
        const deckId = e.target.id
        return setDeckId(deckId);
	};

	const headerColor = () => {
		const colorArray = ['rgb(69, 105, 139)', 'rgba(69, 105, 139, 0.5)', 'rgba(165, 128, 93, 0.9)', 'rgba(165, 93, 94, 0.9)', 'rgba(165, 93, 130, 0.9)', 'rgba(165, 93, 130, 0.5)', 'rgba(165, 93, 94, 0.5)', 'rgba(165, 128, 93, 0.5)']
		const randomNumber = Math.floor((Math.random() * 5) + 0);
		return colorArray[randomNumber]
	}

	return (
		loaded && (
			<div className="yourDecksDiv">
				<div className="yourDeckTextDiv">Your Decks</div>
				<div className="decksDiv">
					<div className="allDecksDiv">
						{decks.map((deck, i) => (
							// <div key={deck.name.concat(i)} onClick={handleSelection}>
								<div id={deck.id} className="deckDiv" key={deck.name.concat(i)} onClick={handleSelection}>
									<div className="deckText" id={deck.id}  onClick={handleSelection}>
										<div style={{backgroundColor: `${headerColor()}`}} className='miniHeader' id={deck.id} onClick={handleSelection}>
											<div id={deck.id} onClick={handleSelection}>{deck.subject}</div>
										</div>
										<div id={deck.id} className="miniDeckName"  onClick={handleSelection}>{deck.name}</div>
										<div id={deck.id} className="miniCreatedBy" onClick={handleSelection}>{`By~ ${deck.user.username}`}</div>
									</div>
								</div>
							// </div>
						))}
					</div>
				</div>
			</div>
		)
	);
};

export default YourDecks;
