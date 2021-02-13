import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as deckActions from "../../store/decks"

import './SearchBar.css'

const SearchBar = () => {
	const [term, setTerm] = useState('')

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(deckActions.searchDecks(term));
	}, [dispatch, term])

	const updateValue = (event) => {
		setTerm(event.target.value)
	};

	return (
		<>
			<div className="searchBarDiv">
				<div className='searchBarInner'>
					<input type="text" className="searchBar" placeholder="Search Decks by Tag (e.g. addition, words)"
					value={term}
					onChange={updateValue}
					/>
					<button className="searchBarButton">
						<i className="fas fa-arrow-right"></i>
					</button>
				</div>
			</div>
		</>
	);
};

export default SearchBar;
