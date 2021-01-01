import React from "react";

const SearchBar = () => {

    const searchDecks = (e) => {
        e.preventDefault();
    }

	return (
		<form onSubmit={searchDecks}>
			<div className="searchBarDiv">
				<input type="text" className="searchBar" placeholder="Search Decks by Tag (e.g. addition, words)" />
				<button className="searchBarButton">
					<i class="fas fa-arrow-right"></i>
				</button>
			</div>
		</form>
	);
};

export default SearchBar;
