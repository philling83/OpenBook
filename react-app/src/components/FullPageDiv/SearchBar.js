import React, {useState} from "react";
import { useDispatch } from "react-redux";
import * as deckActions from "../../store/decks"

import './SearchBar.css'

const SearchBar = () => {
	const [term, setTerm] = useState('')

	const dispatch = useDispatch()

    const searchDecks = async (e) => {
		e.preventDefault();
		return dispatch(deckActions.allDecks());

	};

	const updateValue = (event) => {
		setTerm(event.target.value)
	};

	return (
		<form onSubmit={searchDecks}>
			<div className="searchBarDiv">
				<input type="text" className="searchBar" placeholder="Search Decks by Tag (e.g. addition, words)"
				value={term}
				onChange={updateValue}
				/>
				<button className="searchBarButton">
					<i class="fas fa-arrow-right"></i>
				</button>
			</div>
		</form>
	);
};

export default SearchBar;
